<?php

namespace App\Traits;

trait TransactionTrait
{
    /**
     * Initiate Index Query
     *
     * @param array $data
     * @return Illuminate\Database\Eloquent\Builder $q
     */
    public function indexQuery(array $data)
    {
        return app('Transaction')
            ->when(isset($data['user_id']) && empty($data['account_id']), function ($q) use ($data) {
                $q->whereHasMorph('payable', 'account', function ($q) use ($data) {
                    $q->where('user_id', $data['user_id']);
                });
            })
            ->when(isset($data['account_id']), function ($q) use ($data) {
                $q->where(function ($q) use ($data) {
                    $q->where('payable_type', 'account')
                    ->where('payable_id', $data['account_id']);
                });
            })
            ->when(isset($data['meta_type']), function ($q) use ($data) {
                $q->where('meta->type', $data['meta_type']);
            })
            ->when(isset($data['meta_type_not']), function ($q) use ($data) {
                $q->where('meta->type', '!=', $data['meta_type_not']);
            })
            ->when(isset($data['type']), function ($q) use ($data) {
                $q->where('type', $data['type']);
            })
            ->when(isset($data['confirmed']), function ($q) use ($data) {
                $q->where('confirmed', $data['confirmed']);
            })
            ->when(! empty($data['status']), function ($q) use ($data) {
                $q->where('meta->status', $data['status']);
            })
            ->when(isset($data['year']) && isset($data['month']), function ($q) use ($data) {
                $q->whereYear('created_at', $data['year'])
                ->whereMonth('created_at', $data['month']);
            })
            ->when(isset($data['order_by']), function ($q) use ($data) {
                $q->orderBy($data['order_by'], $data['order_desc'] ? 'desc' : 'asc');
            }, function ($q) {
                $q->latest();
            });
    }
}
