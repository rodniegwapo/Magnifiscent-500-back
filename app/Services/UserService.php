<?php

namespace App\Services;

use Illuminate\Support\Facades\DB;

class UserService
{
    /**
     * Display a listing of the resource.
     *
     * @param array|null $data
     * @return array|int
     */
    public function index(array $data = null)
    {
        $users = app('User')
            ->when(isset($data['search']), function ($q) use ($data) {
                $columns = [
                    'first_name', 'middle_name', 'last_name', 'username', 'email',
                    DB::raw('CONCAT(first_name, " ", last_name)'),
                    DB::raw('CONCAT(first_name, " ", middle_name, " ", last_name)')
                ];
                $q->search($data['search'], $columns);
            })
            ->when(isset($data['role_id']), function ($q) use ($data) {
                $q->where('role_id', $data['role_id']);
            })
            ->when(isset($data['role_slug']), function ($q) use ($data) {
                $q->byRole($data['role_slug']);
            })
            ->when(isset($data['blocked']), function ($q) use ($data) {
                $q->when($data['blocked'], function ($q) use ($data) {
                    $q->onlyTrashed();
                });
            }, function ($q) {
                $q->withTrashed();
            })
            ->when(isset($data['order_by']), function ($q) use ($data) {
                $q->orderBy($data['order_by'], $data['order_desc'] ? 'desc' : 'asc');
            }, function ($q) {
                $q->latest();
            });

        return isset($data['page']) ? $users->paginate($data['limit'] ?? 10) : $users->get();
    }

    /**
     * Get User Monthly Qualifiers
     *
     * @param array $data
     * @return array
     */
    public function monthlyQualifiers(array $data)
    {
        $users = app('Account')->select('u.*')
            ->groupBy('u.id')
            ->rightJoin('users as u', 'accounts.user_id', '=', 'u.id')
            ->whereHas('referredAccountsByUser', function ($q) use ($data) {
                $q->where(function ($q) {
                    $q->whereRaw('referred_last_name != u.last_name')
                    ->orWhere(function ($q) {
                        $q->whereRaw('referred_last_name = u.last_name')
                        ->whereRaw('referred_middle_name != u.middle_name');
                    });
                })
                ->when(isset($data['year']), function ($q) use ($data) {
                    $q->whereYear('created_at', $data['year'])
                    ->whereMonth('created_at', $data['month']);
                });
            }, '>=', config('app.requirements.monthly_qualifiers.direct_referral'))
            // Search
            ->when(! empty($data['search']), function ($q) use ($data) {
                $q->where(function ($q) use ($data) {
                    $q->where('u.first_name', 'like', '%' . $data['search'] . '%')
                    ->orWhere('u.middle_name', 'like', '%' . $data['search'] . '%')
                    ->orWhere('u.last_name', 'like', '%' . $data['search'] . '%')
                    ->orWhere(DB::raw('CONCAT(u.first_name, " ", u.last_name)'), 'like', '%' . $data['search'] . '%');
                });
            })
            // Sorting
            ->when(isset($data['order_by']), function ($q) use ($data) {
                $q->orderBy('u.' . $data['order_by'], $data['order_desc'] ? 'desc' : 'asc');
            }, function ($q) {
                $q->latest();
            });

        return isset($data['page']) ? $users->paginate($data['limit'] ?? 10) : $users->get();
    }

    /**
     * Get Top Qualifiers
     *
     * @param int $year
     * @param int $month
     * @param int $top
     * @return Illuminate\Database\Eloquent\Collection
     */
    public function topQualifiers(int $year, int $month, int $top)
    {
        $topQualifiers = app('User')
            ->rightJoin('accounts', 'users.id', '=', 'accounts.user_id')
            ->rightJoin('transactions', 'accounts.id', '=', 'transactions.payable_id')
            ->select(DB::raw('(sum(transactions.amount)) as amount'), 'users.*')
            ->where('transactions.payable_type', 'account')
            ->where('transactions.type', 'deposit')
            ->whereYear('transactions.created_at', $year)
            ->whereMonth('transactions.created_at', $month)
            ->groupBy('users.id')
            ->orderBy('amount', 'desc')
            ->take($top)
            ->get();

        return $topQualifiers;
    }

    /**
     * Register User with Account/Package Code
     *
     * @param array $data
     * @param string $code
     * @param int $referrer_id
     * @return array|object
     */
    public function register(array $data, string $code, int $referrer_id)
    {
        $role = app('Role')->where('slug', 'user')->first();
        $user = $role->users()->create($data);
        // Add Account
        app('AccountService')->store($user, $code, $referrer_id);

        return $user;
    }
}
