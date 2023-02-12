<?php

namespace App\Http\Controllers\Api\User;

use App\Http\Controllers\Controller;
use App\Models\Account;

class DashboardController extends Controller
{
    /**
     * Get Summary
     *
     * @param App\Models\Account|null $account
     * @return \Illuminate\Http\Response
     */
    public function index(Account $account = null)
    {
        $user_id = auth()->id();
        abort_if($account && $user_id !== $account->user_id, 403, 'Unauthorized.');
        // Latest Announcements
        $announcements = app('Announcement')->latest()->limit(10)->get();
        // Commissions
        $directReferral = app('TransactionService')
            ->indexQuery([
                'user_id' => $user_id, 'meta_type' => 'Direct Referral', 'account_id' => $account->id ?? null
            ])
            ->sum('amount');
        $tableOfExit = app('TransactionService')
            ->indexQuery([
                'user_id' => $user_id, 'meta_type' => 'Table Of Exit', 'account_id' => $account->id ?? null
            ])
            ->sum('amount');
        $monthlySharing = app('TransactionService')
            ->indexQuery([
                'user_id' => $user_id, 'meta_type' => 'Monthly Sharing Poll', 'account_id' => $account->id ?? null
            ])
            ->sum('amount');
        $totalCommission = ($directReferral / 100) + ($tableOfExit / 100) + ($monthlySharing / 100);
        $availableCommission = app('Wallet')
            ->when($account, function ($q) use ($account) {
                $q->where('holder_type', 'account')->where('holder_id', $account->id);
            }, function ($q) use ($user_id) {
                $q->whereHasMorph('holder', 'account', function ($q) use ($user_id) {
                    $q->where('user_id', $user_id);
                });
            })
            ->sum('balance');
        $commissions = [
            [ 'name' => 'Direct Referral', 'value' => $directReferral / 100 ],
            [ 'name' => 'Table Of Exit', 'value' => $tableOfExit / 100 ],
            [ 'name' => 'Monthly Sharing Poll', 'value' => $monthlySharing / 100 ],
            [ 'name' => 'Total Commission', 'value' => $totalCommission ],
            [ 'name' => 'Available Commission', 'value' => $availableCommission / 100 ]
        ];
        // Overall
        $overallCommission = app('TransactionService')
            ->indexQuery([ 'user_id' => $user_id, 'type' => 'deposit' ])
            ->sum('amount');
        $overallPaidEncashment = app('Transaction')
            ->whereHasMorph('payable', 'account', function ($q) use ($user_id) {
                $q->where('user_id', $user_id);
            })
            ->paidEncashment()->sum('amount');
        $overall = [
            [ 'name' => 'Overall Commission', 'value' => $overallCommission / 100 ],
            [ 'name' => 'Overall Encashment', 'value' => ($overallPaidEncashment / 100) * -1 ]
        ];
        // Monthly Sharing Poll
        $totalMonthlySharing = app('Account')->admin(false)
            ->whereYear('created_at', date('Y'))
            ->whereMonth('created_at', date('m'))
            ->count() * config('app.monthly_sharing_poll');
        $totalQualifiedAccounts = app('AccountService')->qualifiedAccounts([
            'year' => date('Y'), 'month' => date('m'), 'count' => true
        ]);
        $myTotalQualifiedAccounts = app('AccountService')->qualifiedAccounts([
            'year' => date('Y'), 'month' => date('m'), 'count' => true, 'user_id' => $user_id
        ]);
        $monthlySharing = [
            [ 'name' => 'Total Monthly Sharing Amount', 'value' => $totalMonthlySharing ],
            [ 'name' => 'Total Qualified Accounts', 'value' => $totalQualifiedAccounts ],
            [ 'name' => 'My Qualified Accounts', 'value' => $myTotalQualifiedAccounts ]
        ];

        return response()->json(['data' => [
            'announcements' => $announcements,
            'commissions' => $commissions,
            'monthly_sharing' => $monthlySharing,
            'overall' => $overall
        ]]);
    }
}
