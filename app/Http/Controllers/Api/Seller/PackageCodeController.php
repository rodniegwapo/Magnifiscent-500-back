<?php

namespace App\Http\Controllers\Api\Seller;

use App\Http\Controllers\Controller;
use App\Http\Requests\PackageCode\Seller\Index;
use App\Http\Resources\PackageCodeResource;
use App\Models\PackageCode;

class PackageCodeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param App\Http\Requests\PackageCode\Seller\Index $request
     * @return \Illuminate\Http\Response
     */
    public function index(Index $request)
    {
        $payload = $request->validated() + ['seller_id' => auth()->id()];
        $packageCodes = app('PackageCodeService')->index($payload);

        return PackageCodeResource::collection($packageCodes);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\PackageCode  $packageCode
     * @return \Illuminate\Http\Response
     */
    public function show(PackageCode $packageCode)
    {
        $this->authorize('view', $packageCode);

        return new PackageCodeResource($packageCode);
    }
}
