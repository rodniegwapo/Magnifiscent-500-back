<?php

namespace App\Http\Controllers\Api\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\Account\User\Index;
use App\Http\Requests\Account\User\Store;
use App\Http\Resources\AccountResource;
use App\Models\Account;

class AccountController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param App\Http\Requests\Account\User\Index
     * @return \Illuminate\Http\Response
     */
    public function index(Index $request)
    {
        $payload = $request->validated() + ['user_id' => auth()->id()];
        $accounts = app('AccountService')->index($payload);

        return AccountResource::collection($accounts);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  App\Http\Requests\Account\User\Store  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Store $request)
    {
        $account = app('AccountService')->store(auth()->user(), $request->package_code, $request->referrer_id);

        return new AccountResource($account);
    }

    /**
     * Display the specified resource.
     *
     * @param  App\Models\Account $account
     * @return \Illuminate\Http\Response
     */
    public function show(Account $account)
    {
        $this->authorize('view', $account);

        return new AccountResource($account);
    }
}
