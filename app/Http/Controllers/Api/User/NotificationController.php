<?php

namespace App\Http\Controllers\Api\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\Notification\Index;
use App\Http\Resources\NotificationResource;

class NotificationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param App\Http\Requests\Notification\Index $request
     * @return \Illuminate\Http\Response
     */
    public function index(Index $request)
    {
        $user_id = auth()->id();
        $payload = $request->validated() + ['user_id' => $user_id];
        $notifications = app('NotificationService')->index($payload);
        $totalUnreadNotifications = app('Notification')->where('user_id', $user_id)
            ->where('read', 0)
            ->count();

        return NotificationResource::collection($notifications)
            ->additional(['meta' => [
                'total_unread_notifications' => $totalUnreadNotifications
            ]]);
    }

    /**
     * Read all unread notifications
     *
     * @return Illuminate\Http\Response
     */
    public function read()
    {
        app('Notification')
            ->where('user_id', auth()->id())
            ->where('read', 0)
            ->update(['read' => 1]);

        return response()->json('success');
    }
}
