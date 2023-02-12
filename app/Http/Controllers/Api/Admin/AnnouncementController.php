<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Announcement\AddImage;
use App\Http\Requests\Announcement\RemoveImage;
use App\Http\Requests\Announcement\Store;
use App\Http\Resources\AnnouncementResource;
use App\Models\Announcement;
use Illuminate\Support\Facades\Storage;

class AnnouncementController extends Controller
{
    /**
     * Upload image for announcement
     *
     * @param App\Http\Requests\Announcement\AddImage $request
     * @return Illuminate\Http\Response
     */
    public function addImage(AddImage $request)
    {
        $dir = 'announcements/' . $request->uuid;
        $image = Storage::putFile($dir, $request->file('image'));
        return response()->json(['data' => Storage::url($image)]);
    }

    /**
     * Upload image for announcement
     *
     * @param App\Http\Requests\Announcement\RemoveImage $request
     * @return Illuminate\Http\Response
     */
    public function removeImage(RemoveImage $request)
    {
        Storage::delete($request->image);

        return response()->json('success');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  App\Http\Requests\Announcement\Store  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Store $request)
    {
        $announcement = app('Announcement')->create($request->validated());

        return new AnnouncementResource($announcement);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  App\Http\Requests\Announcement\Store  $request
     * @param  App\Models\Announcement $announcement
     * @return \Illuminate\Http\Response
     */
    public function update(Store $request, Announcement $announcement)
    {
        $announcement->update($request->validated());

        return new AnnouncementResource($announcement);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  App\Models\Announcement $announcement
     * @return \Illuminate\Http\Response
     */
    public function destroy(Announcement $announcement)
    {
        $announcement->delete();
        Storage::deleteDirectory('announcements/' . $announcement->uuid);

        return new AnnouncementResource($announcement);
    }
}
