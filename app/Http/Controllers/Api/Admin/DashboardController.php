<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;

class DashboardController extends Controller
{
    /**
     * Get Summary
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $year = date('Y');
        $month = date('m');
        // Users
        $totalAdmins = app('User')->byRole('admin')->count();
        $totalSellers = app('User')->byRole('seller')->count();
        $totalUsers = app('User')->byRole('user')->count();
        $users = [
            [ 'name' => 'Admins', 'value' => $totalAdmins ],
            [ 'name' => 'Sellers', 'value' => $totalSellers ],
            [ 'name' => 'Users', 'value' => $totalUsers ],
            [ 'name' => 'Total', 'value' => $totalAdmins + $totalSellers + $totalUsers ]
        ];
        // Accounts
        $totalUserAccounts = app('Account')->admin(false)->count();
        $totalAdminAccounts = app('Account')->admin()->count();
        $accounts = [
            [ 'name' => 'Admins', 'value' => $totalAdminAccounts ],
            [ 'name' => 'Users', 'value' => $totalUserAccounts ],
            [ 'name' => 'Total', 'value' => $totalAdminAccounts + $totalUserAccounts ]
        ];
        // Encashments
        $totalMembersIncome = app('Transaction')->membersIncome()->sum('amount');
        $paidEncashments = app('Transaction')->paidEncashment()->sum('amount');
        $encashments = [
            [ 'name' => 'Paid', 'value' => ($paidEncashments / 100) * -1 ],
            [ 'name' => 'Unpaid', 'value' => ($totalMembersIncome / 100) - (($paidEncashments / 100) * -1) ],
            [ 'name' => 'Total', 'value' => ($totalMembersIncome / 100) ]
        ];
        // Monthly Sharing Poll
        $totalMonthlySharing = app('Account')->admin(false)
            ->whereYear('created_at', $year)
            ->whereMonth('created_at', $month)
            ->count() * config('app.monthly_sharing_poll');
        $totalQualifiedAccounts = app('AccountService')->qualifiedAccounts([
            'year' => $year, 'month' => $month, 'count' => true
        ]);
        $monthlySharing = [
            [ 'name' => 'Total Monthly Sharing Amount', 'value' => $totalMonthlySharing ],
            [ 'name' => 'Qualified Accounts', 'value' => $totalQualifiedAccounts ]
        ];
        // Other Income/s
        $totalEncashmentTax = app('TransactionService')->indexQuery([
                'meta_type' => 'Encashment', 'confirmed' => true
            ])
            ->sum('meta->total_fee');
        $otherIncome = [
            [ 'name' => 'Total', 'value' => $totalEncashmentTax ]
        ];
        // Sales
        $grossSales = $totalUserAccounts * config('app.account_price');
        $productCost = $totalUserAccounts * config('app.product_cost.total');
        $totalUsersIncome = app('TransactionService')
            ->indexQuery([ 'type' => 'deposit', 'meta_type_not' => 'Monthly Sharing Poll' ])
            ->sum('amount');
        $overallMonthlySharing = app('Account')->admin(false)
            ->count() * config('app.monthly_sharing_poll');
        $totalDedutableIncome = $productCost + ($totalUsersIncome / 100) + $overallMonthlySharing;
        $netSales = $grossSales - $totalDedutableIncome;
        $sales = [
            [ 'name' => 'Gross Sales', 'value' => $grossSales ],
            [ 'name' => 'Total Deductable Income', 'value' => $totalDedutableIncome ],
            [ 'name' => 'Net Sales', 'value' => $netSales ]
        ];

        return response()->json(['data' => [
            'sales' => $sales,
            'users' => $users,
            'accounts' => $accounts,
            'encashments' => $encashments,
            'monthly_sharing' => $monthlySharing,
            'other_income' => $otherIncome
        ]]);
    }
}
