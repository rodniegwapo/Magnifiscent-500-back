<?php

namespace App\Http\Controllers\Web;

use App\Exports\PackageCodeExport;
use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Illuminate\Support\Facades\Crypt;

class ExportController extends Controller
{
    /**
     * Export package codes.
     *
     * @param string $encryptedPayload
     * @return \Illuminate\Http\Response
     */
    public function packageCodes(string $encryptedPayload)
    {
        $payload = Crypt::decrypt($encryptedPayload);
        abort_if($payload['expiry'] <= Carbon::now()->format('Y-m-d H:i:s'), 404, 'Page not found.');

        return new PackageCodeExport($payload);
    }
}
