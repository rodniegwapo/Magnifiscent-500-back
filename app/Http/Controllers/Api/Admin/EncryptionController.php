<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Encryption\Admin\PackageCode;
use Carbon\Carbon;
use Illuminate\Support\Facades\Crypt;

class EncryptionController extends Controller
{

    /**
     * Encrypt Package Codes Request for export
     *
     * @param App\Http\Requests\Encryption\Admin\PackageCode $request
     * @return \Illuminate\Http\Response
     */
    public function packageCodes(PackageCode $request)
    {
        $payload = $request->validated();
        $payload['expiry'] = Carbon::now()->addMinutes(5)->format('Y-m-d H:i:s');
        $encrypt = Crypt::encrypt($payload);

        return response()->json(['data' => $encrypt]);
    }
}
