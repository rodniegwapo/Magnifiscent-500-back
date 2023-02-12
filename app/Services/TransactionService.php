<?php

namespace App\Services;

use App\Jobs\MonthlySharingJob;
use App\Traits\TransactionTrait;

class TransactionService
{
    use TransactionTrait;

    /**
     * Get Transactions
     *
     * @param array $data
     * @return array
     */
    public function index(array $data)
    {
        $transactions = $this->indexQuery($data);

        return isset($data['page']) ? $transactions->paginate($data['limit'] ?? 10) : $transactions->get();
    }

    /**
     * Distribute Monthly Sharing Poll
     *
     * @param int $year
     * @param int $month
     * @return void
     */
    public function distributeMonthlySharingPoll(int $year, int $month)
    {
        $totalMonthlyQualifiers = app('AccountService')->qualifiedAccounts([
                'year' => $year, 'month' => $month, 'count' => true
            ]);
        $totalMonthlySharing = app('Account')->admin(false)
            ->whereYear('created_at', $year)
            ->whereMonth('created_at', $month)
            ->count() * config('app.monthly_sharing_poll');
        $rewardPerAccount = $totalMonthlyQualifiers > 0 ? $totalMonthlySharing / $totalMonthlyQualifiers : 0;
        // Give Reward by chunk/batch
        $monthlyQualifiers = app('AccountService')->qualifiedAccounts([
                'year' => $year, 'month' => $month, 'query' => true
            ])
            ->chunk(25, function($accounts) use ($rewardPerAccount, $year, $month) {
                MonthlySharingJob::dispatch($accounts, $rewardPerAccount, $year, $month);
            });
    }
}
