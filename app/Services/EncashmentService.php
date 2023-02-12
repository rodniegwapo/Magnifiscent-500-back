<?php

namespace App\Services;

use Illuminate\Support\Facades\DB;

class EncashmentService
{
    /**
     * Get All Users who has encashment
     *
     * @param array $data
     * @return Illuminate\Database\Eloquent\Collection
     */
    public function users(array $data)
    {
        $users = app('User')
            ->whereHas('accounts', function ($q) use ($data) {
                $q->whereHas('transactions', function ($q) use ($data) {
                    $q->where('meta->type', 'Encashment')
                    ->when(! empty($data['status']), function ($q) use ($data) {
                        $q->where('meta->status', $data['status']);
                    });
                });
            })
            ->when(isset($data['search']), function ($q) use ($data) {
                $columns = [
                    'first_name', 'middle_name', 'last_name', 'username', 'email',
                    DB::raw('CONCAT(first_name, " ", last_name)'),
                    DB::raw('CONCAT(first_name, " ", middle_name, " ", last_name)')
                ];
                $q->search($data['search'], $columns);
            })
            ->orderBy('first_name', 'asc');

        return isset($data['page']) ? $users->paginate($data['limit'] ?? 10) : $users->get();
    }
}