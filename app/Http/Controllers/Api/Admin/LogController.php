<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Log\Index;
use App\Http\Resources\LogResource;
use App\Models\Log;

class LogController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Index $request)
    {
        $logs = app('LogService')->index($request->validated());

        return LogResource::collection($logs);
    }

    /**
     * Display the specified resource.
     *
     * @param  App\Models\Log $log
     * @return \Illuminate\Http\Response
     */
    public function show(Log $log)
    {
        return new LogResource($log);
    }
}
