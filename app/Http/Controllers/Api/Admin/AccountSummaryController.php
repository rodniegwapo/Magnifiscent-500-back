<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Account\Admin\Index;
use App\Http\Resources\AccountSummary\AccountResource;

class AccountSummaryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param App\Http\Requests\Account\Admin\Index $request
     * @return \Illuminate\Http\Response
     */
    public function index(Index $request)
    {
        $accounts = app('AccountService')->index($request->validated());
        $user = app('User')->findOrFail($request->user_id);
        $totalEncashment = app('TransactionService')
            ->indexQuery([ 'user_id' => $user->id, 'meta_type' => 'Encashment' ])
            ->sum('amount');
        $availableCommission = app('Wallet')
            ->whereHasMorph('holder', 'account', function ($q) use ($user) {
                $q->where('user_id', $user->id);
            })
            ->sum('balance');

        return AccountResource::collection($accounts)
            ->additional(['meta' => [
                'available_commission' => $availableCommission / 100,
                'total_encashment' => ($totalEncashment / 100) * -1,
                'total_account' => $user->accounts()->count()
            ]]);
    }
}
