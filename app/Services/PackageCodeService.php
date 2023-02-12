<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Str;

class PackageCodeService
{
    /**
     * Get Package Codes
     *
     * @param array|null $data
     * @return array
     */
    public function index(array $data = null)
    {
        $codes = app('PackageCode')
            ->when(isset($data['account_id']), function ($q) use ($data) {
                $q->where('account_id', $data['account_id']);
            })
            ->when(isset($data['user_id']) && empty($data['account_id']), function ($q) use ($data) {
                $q->whereHas('account', function ($q) use ($data) {
                    $q->where('user_id', $data['user_id']);
                });
            })
            ->when(isset($data['seller_id']), function ($q) use ($data) {
                $q->where('seller_id', $data['seller_id']);
            })
            ->when(isset($data['claimed']), function ($q) use ($data) {
                $q->when($data['claimed'], function ($q) {
                    $q->whereNotNull('account_id');
                }, function ($q) {
                    $q->whereNull('account_id');
                });
            })
            ->when(isset($data['order_by']), function ($q) use ($data) {
                $q->orderBy($data['order_by'], $data['order_desc'] ? 'desc' : 'asc');
            }, function ($q) {
                $q->latest();
            });

        return isset($data['page']) ? $codes->paginate($data['limit'] ?? 10) : $codes->get();
    }

    /**
     * Store One or more Package Codes
     *
     * @param int $seller_id
     * @param int $no_of_codes
     * @return int
     */
    public function store(int $seller_id, int $no_of_codes)
    {
        $codes = collect();
        for ($i = 0; $i < $no_of_codes; $i++) {
            $now = now();
            $codes->push([
                'seller_id' => $seller_id,
                'code' => strtoupper(str_replace('-', '', Str::uuid())),
                'created_at' => $now,
                'updated_at' => $now
            ]);
        }

        app('PackageCode')->insert($codes->toArray());

        return $no_of_codes;
    }
}
