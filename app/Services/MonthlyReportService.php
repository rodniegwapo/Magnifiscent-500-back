<?php

namespace App\Services;

class MonthlyReportService
{
    /**
     * Get Monthly Reports
     *
     * @param int $year
     * @param int $month
     * @return array $data
     */
    public function index(int $year, int $month)
    {
        $totalUserAccounts = app('Account')->admin(false)
            ->whereYear('created_at', $year)
            ->whereMonth('created_at', $month)
            ->count();
        $grossSales = $totalUserAccounts * config('app.account_price');
        $productCost = $totalUserAccounts * config('app.product_cost.total');
        $totalMonthlySharing = $totalUserAccounts * config('app.monthly_sharing_poll');
        // Deductions
        $totalPayables = app('Transaction')->where('type', 'deposit')
            ->where('meta->type', '!=', 'Monthly Sharing Poll')
            ->whereYear('created_at', $year)
            ->whereMonth('created_at', $month)
            ->sum('amount');
        $deductions = [
            [ 'name' => 'Total Package Cost', 'value' => $productCost ],
            [ 'name' => 'Monthly Sharing Poll', 'value' => $totalMonthlySharing ],
            [ 'name' => 'Member\'s Income', 'value' => ($totalPayables / 100) ]
        ];
        // Sales
        $totalDeductableIncome = $productCost + $totalMonthlySharing + ($totalPayables / 100);
        $netSales = $grossSales - $totalDeductableIncome;
        $sales = [
            [ 'name' => 'Gross Sales', 'value' => $grossSales ],
            [ 'name' => 'Total Deductable Income', 'value' => $totalDeductableIncome ],
            [ 'name' => 'Net Sales', 'value' => $netSales ]
        ];
        // Encashments
        $paidEncashments = app('Transaction')
            ->paidEncashment()
            ->whereYear('created_at', $year)
            ->whereMonth('created_at', $month)
            ->sum('amount');
        $taxIncome = app('Transaction')
            ->paidEncashment()
            ->whereYear('created_at', $year)
            ->whereMonth('created_at', $month)
            ->sum('meta->tax_fee');
        $adminFee = app('Transaction')
            ->paidEncashment()
            ->whereYear('created_at', $year)
            ->whereMonth('created_at', $month)
            ->sum('meta->admin_fee');
        $encashments = [
            [ 'name' => 'Total Paid', 'value' => (($paidEncashments / 100) * -1) ],
            [ 'name' => 'Total Unpaid', 'value' => ($totalPayables / 100) - (($paidEncashments / 100) * -1) ],
            [ 'name' => 'Tax Income', 'value' => $taxIncome ],
            [ 'name' => 'Admin Fee', 'value' => $adminFee ]
        ];
        // Monthly Sharing (BOD)
        $itShares = $netSales * 0.05;
        $monthlySharing = [
            [ 'name' => 'Company', 'value' => $netSales - $itShares ],
            [ 'name' => 'IT Service', 'value' => $itShares ]
        ];

        return [
            'sales' => $sales,
            'deductions' => $deductions,
            'encashments' => $encashments,
            'monthly_sharing' => $monthlySharing
        ];
    }
}
