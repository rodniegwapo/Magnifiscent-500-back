<?php

namespace App\Services;

use App\Jobs\TableOfExit\TableFirstLevelJob;
use App\Models\User;
use App\Notifications\WelcomeNotification;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class AccountService
{

    /**
     * Get Accounts
     *
     * @param array $data
     * @return array
     */
    public function index(array $data)
    {
        $accounts = app('Account')
            ->when(isset($data['user_id']), function ($q) use ($data) {
                $q->where('user_id', $data['user_id']);
            })
            ->when(isset($data['referrer_id']), function ($q) use ($data) {
                $q->where('referrer_id', $data['referrer_id']);
            })
            ->when(isset($data['admin']), function ($q) use ($data) {
                $q->when($data['admin'], function ($q) {
                    $q->whereNull('user_id');
                }, function ($q) {
                    $q->whereNotNull('user_id');
                });
            })
            ->when(! empty($data['search']), function ($q) use ($data) {
                $q->whereLike('name', '%' . $data['search'] . '%');
            })
            ->when(isset($data['order_by']), function ($q) use ($data) {
                $q->orderBy($data['order_by'], $data['order_desc'] ? 'desc' : 'asc');
            }, function ($q) {
                $q->latest();
            });

        return isset($data['page']) ? $accounts->paginate($data['limit'] ?? 10) : $accounts->get();
    }

    /**
     * Get Qualified Accounts
     *
     * @param array $data
     * @return array|int
     */
    public function qualifiedAccounts(array $data)
    {
        $accounts = app('Account')
        ->select('accounts.*')
        ->leftJoin('users as u', 'accounts.user_id', '=', 'u.id')
        // By User Id
        ->when(isset($data['user_id']), function ($q) use ($data) {
            $q->where('accounts.user_id', $data['user_id']);
        })
        ->whereNotNull('user_id')
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
        }, '>=', config('app.requirements.monthly_qualifiers.direct_referral'));

        if (! empty($data['query'])) { return $accounts; }
        if (! empty($data['count'])) { return $accounts->count(); }

        return isset($data['page']) ? $accounts->paginate($data['limit'] ?? 10) : $accounts->get();
    }

    /**
     * Store Account
     *
     * @param App\Models\User $user
     * @param string $code
     * @param int|null $referrer_id
     * @return
     */
    public function store(User $user, string $code, int $referrer_id = null)
    {
        $indentifier = str_pad($user->totalAccounts() + 1, 3, '0', STR_PAD_LEFT);
        $account = $user->accounts()->create([
            'code' => str_replace('-', '', Str::uuid()),
            'referrer_id' => $referrer_id,
            'name' => $indentifier
        ]);

        $packageCode = app('PackageCode')
            ->where(DB::raw('BINARY `code`'), $code)
            ->first();
        $packageCode->update(['account_id' => $account->id, 'claimed_at' => now()]);

        $referrer = null;
        if ($referrer_id) {
            $referrer = app('Account')->find($referrer_id);
            $reward = $referrer->user_id ? config('app.rewards.direct_referral'): 0;
            $referrer->depositFloat($reward, [
                'type' => 'Direct Referral',
                'referred_id' => $account->id
            ]);
            // Direct Referral Checker
            $account->referredAccountsChecker();
            // Make sure that the account belongs to a user not admin
            if ($referrer->user_id) {
                $referrer->createNotification('Direct Referral');
            }
        }

        TableFirstLevelJob::dispatch($account);
        $account->notify(new WelcomeNotification($account));

        return $account; 
    }
}
