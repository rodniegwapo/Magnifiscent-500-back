<?php

namespace App\Http\Controllers\Api\Seller;

use App\Http\Controllers\Controller;
use App\Http\Requests\Encryption\Seller\PackageCode;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;

class EncryptionController extends Controller
{
    /**
     * Encrypt Package Codes Request for export
     *
     * @param App\Http\Requests\Encryption\Seller\PackageCode $request
     * @return \Illuminate\Http\Response
     */
    public function packageCodes(PackageCode $request)
    {
        $payload = $request->validated();
        $payload['seller_id'] = auth()->id();
        $payload['expiry'] = Carbon::now()->addMinutes(5)->format('Y-m-d H:i:s');
        $encrypt = Crypt::encrypt($payload);

        return response()->json(['data' => $encrypt]);
    }
}
