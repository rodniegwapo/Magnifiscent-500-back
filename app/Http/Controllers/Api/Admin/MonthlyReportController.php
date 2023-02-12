<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\MonthlyReport\Index;
use Carbon\Carbon;

class MonthlyReportController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param App\Http\Requests\MonthlyReport\Index $request
     * @return \Illuminate\Http\Response
     */
    public function index(Index $request)
    {
        $summary = app('MonthlyReportService')->index($request->year, $request->month);

        return response()->json(['data' => $summary]);
    }
}
