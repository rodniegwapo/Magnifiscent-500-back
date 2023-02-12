<?php

namespace App\Models;

use Bavix\Wallet\Models\Transaction as WalletTransaction;

class Transaction extends WalletTransaction
{
    /**
     * Get Paid Encashments
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $q
     * @param bool $paid
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopePaidEncashment($q, bool $paid = true)
    {
        return $q->where(function ($q) use ($paid) {
            $q->where('type', 'withdraw')
            ->where('meta->type', 'Encashment')
            ->where('confirmed', 1)
            ->where('meta->status', $paid ? 'paid' : 'unpaid');
        });
    }

    /**
     * Get Encashments
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $q
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeEncashment($q)
    {
        return $q->where(function ($q) {
            $q->where('type', 'withdraw')
            ->where('meta->type', 'Encashment')
            ->where('confirmed', 1);
        });
    }

    /**
     * Get Total Member's Income
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $q
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeMembersIncome($q)
    {
        return $q->where(function ($q) {
            $q->where('type', 'deposit')
            ->where('confirmed', 1);
        });
    }

    /**
     * Check first if monthly sharing is already distributed
     *
     * @param int $year
     * @param int $month
     * @return bool
     */
    public function monthlySharingAlreadyDistributed(int $year, int $month)
    {
        $monthlySharingPolls = $this->where('meta->type', 'Monthly Sharing Poll')
            ->where('type', 'deposit')
            ->where('confirmed', 1)
            ->where('meta->year', $year)
            ->where('meta->month', $month)
            ->count();

        return $monthlySharingPolls > 0;
    }
}
