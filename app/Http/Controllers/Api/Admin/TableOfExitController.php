<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\TableOfExit\Admin\Show;
use App\Http\Resources\TableOfExitResource;

class TableOfExitController extends Controller
{
    /**
     * Display the specified resource.
     *
     * @param  App\Http\Requests\TableOfExit\Admin\Show $request
     * @return \Illuminate\Http\Response
     */
    public function show(Show $request)
    {
        $account = app('Account')->find($request->account_id);
        $tableOfExit = $account->tableOfExits()
            ->where('table_level', $request->table_level)
            ->latest()->first();
        abort_if(! $tableOfExit, 404, 'Table of exit not found.');

        return new TableOfExitResource($tableOfExit);
    }
}
