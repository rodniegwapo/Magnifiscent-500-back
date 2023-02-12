<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Announcement\Index;
use App\Http\Resources\AnnouncementResource;
use App\Models\Announcement;

class AnnouncementController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param App\Http\Requests\Announcement\Index $request
     * @return \Illuminate\Http\Response
     */
    public function index(Index $request)
    {
        $announcements = app('AnnouncementService')->index($request->validated());

        return AnnouncementResource::collection($announcements);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Announcement $announcement)
    {
        return new AnnouncementResource($announcement);
    }
}
