<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Transaction\Admin\Index;
use App\Http\Resources\TransactionResource;
use Bavix\Wallet\Models\Transaction;

class TransactionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param App\Http\Requests\Transaction\Admin\Index $request
     * @return \Illuminate\Http\Response
     */
    public function index(Index $request)
    {
        $transactions = app('TransactionService')->index($request->validated());

        return TransactionResource::collection($transactions);
    }

    /**
     * Display the specified resource.
     *
     * @param  Bavix\Wallet\Models\Transaction $transaction
     * @return \Illuminate\Http\Response
     */
    public function show(Transaction $transaction)
    {
        return new TransactionResource($transaction);
    }

     /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Ticket  $ticket
     * @return \Illuminate\Http\Response
     */
    public function destroy(Transaction $transaction)
    {
        abort_if($transaction->confirmed, 403, 'Confirmed transaction will not be removed.');

        $transaction->delete();
        return new TransactionResource($transaction);
    }

    /**
     * Approve encashment
     *
     * @param Bavix\Wallet\Models\Transaction $transaction
     * @return Illuminate\Http\Response
     */
    public function approveEncashment(Transaction $transaction)
    {
        $account = $transaction->payable;
        $account->confirm($transaction);
        $account->wallet->refreshBalance();
        $account->createNotification('Encashment');

        return new TransactionResource($transaction);
    }
}
