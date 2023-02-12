<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\PackageCode\Admin\Index;
use App\Http\Requests\PackageCode\Admin\Store;
use App\Http\Resources\PackageCodeResource;
use App\Models\PackageCode;

class PackageCodeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param App\Http\Requests\PackageCode\Admin\Index $request
     * @return \Illuminate\Http\Response
     */
    public function index(Index $request)
    {
        $packageCodes = app('PackageCodeService')->index($request->validated());

        return PackageCodeResource::collection($packageCodes);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  App\Http\Requests\PackageCode\Admin\Store  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Store $request)
    {
        $codes = app('PackageCodeService')->store($request->seller_id, $request->no_of_codes);

        return response()->json($codes . ' package codes created successfully.');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\PackageCode  $packageCode
     * @return \Illuminate\Http\Response
     */
    public function show(PackageCode $packageCode)
    {
        return new PackageCodeResource($packageCode);
    }
}
