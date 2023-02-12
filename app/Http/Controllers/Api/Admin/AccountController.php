<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Account\Admin\Index;
use App\Http\Resources\AccountResource;
use App\Models\Account;

class AccountController extends Controller
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

        return AccountResource::collection($accounts);
    }

    /**
     * Display the specified resource.
     *
     * @param  App\Models\Account $account
     * @return \Illuminate\Http\Response
     */
    public function show(Account $account)
    {
        return new AccountResource($account);
    }
}
