<?php

namespace App\Http\Controllers\Api\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\Transaction\User\Encashment;
use App\Http\Requests\Transaction\User\Index;
use App\Http\Resources\TransactionResource;
use Bavix\Wallet\Models\Transaction;

class TransactionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param App\Http\Requests\Transaction\User\Index $request
     * @return \Illuminate\Http\Response
     */
    public function index(Index $request)
    {
        $payload = $request->validated() + ['user_id' => auth()->id()];
        $transactions = app('TransactionService')->index($payload);
        $account = app('Account')->find($request->account_id);

        return TransactionResource::collection($transactions)
            ->additional(['meta' => [
                'available_commission' => $account ? $account->balanceFloat : 0
            ]]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  App\Http\Requests\Transaction\User\Encashment  $request
     * @return \Illuminate\Http\Response
     */
    public function encashment(Encashment $request)
    {
        // Validate Payment Channel
        $user = auth()->user();
        if ($request->payment_channel_type == 'Bank') {
            switch ($request->payment_channel) {
                case 'BDO':
                    abort_if(! $user->bdo_account, 403, 'Please add your BDO account.');
                    break;
                case 'Eastwest':
                    abort_if(! $user->eastwest_account, 403, 'Please add your Eastwest account.');
                    break;
                case 'Security Bank':
                    abort_if(! $user->eastwest_account, 403, 'Please add your Security Bank account.');
                    break;
                default:
                    break;
            }
        }
        // Process Encashment
        $account = app('Account')->find($request->account_id);
        $adminFee = config('app.encashment.admin_fee');
        $tax = config('app.encashment.tax');
        $taxFee = $request->amount * ($tax / 100);
        $transaction = $account->withdrawFloat($request->amount, [
            'type' => 'Encashment',
            'status' => 'unpaid',
            'tax' => $tax,
            'tax_fee' => $taxFee,
            'admin_fee' => $adminFee,
            'total_fee' => $taxFee + $adminFee,
            'net_amount' => $request->amount - ($adminFee + $taxFee),
            'payment_channel_type' => $request->payment_channel_type,
            'payment_channel' => $request->payment_channel
        ], true);

        return new TransactionResource($transaction);
    }

    /**
     * Display the specified resource.
     *
     * @param  Bavix\Wallet\Models\Transaction $transaction
     * @return \Illuminate\Http\Response
     */
    public function show(Transaction $transaction)
    {
        $this->authorize('view', $transaction);

        return new TransactionResource($transaction);
    }
}
