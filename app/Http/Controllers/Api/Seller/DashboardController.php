<?php

namespace App\Http\Controllers\Api\Seller;

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
        $user = auth()->user();
        // Package Codes
        $totalPackageCodes = $user->packageCodes()->count();
        $totalClaimedPackageCodes = $user->packageCodes()
            ->whereNotNull('account_id')
            ->count();
        $totalAvailablePackageCodes = $user->packageCodes()
            ->whereNull('account_id')
            ->count();
        $package_codes = [
            [ 'name' => 'Total Package Codes', 'value' => $totalPackageCodes ],
            [ 'name' => 'Total Claimed Package Codes', 'value' => $totalClaimedPackageCodes ],
            [ 'name' => 'Total Available Package Codes', 'value' => $totalAvailablePackageCodes ]
        ];

        return response()->json(['data' => [
            'package_codes' => $package_codes
        ]]);
    }
}
