<?php

namespace App\Http\Controllers\Api\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\TableOfExit\User\Show;
use App\Http\Resources\TableOfExitResource;

class TableOfExitController extends Controller
{
    /**
     * Display the specified resource.
     *
     * @param  App\Http\Requests\TableOfExit\User\Show $request
     * @return \Illuminate\Http\Response
     */
    public function show(Show $request)
    {
        $account = app('Account')->find($request->account_id);
        $tableOfExit = $account->tableOfExits()
            ->withDepth()
            ->where('table_level', $request->table_level)
            ->latest()->first();
        abort_if(! $tableOfExit, 404, 'Table of exit not found.');
        if (! empty($request->parent_depth)) {
            $parent = app('TableOfExit')->whereAncestorOf($tableOfExit->id)
                ->withDepth()
                ->having('depth', '=', $tableOfExit->depth - $request->parent_depth)
                ->first();

            abort_if(! $parent, 404, 'Table of exit not found.');
            return new TableOfExitResource($parent);
        }

        return new TableOfExitResource($tableOfExit);
    }
}
