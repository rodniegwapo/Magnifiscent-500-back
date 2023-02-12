<?php

namespace App\Services;

class NotificationService
{
    /**
     * Get Notifications
     *
     * @param array|null $data
     * @return array
     */
    public function index(array $data = null)
    {
        $notifications = app('Notification')
            ->when(isset($data['user_id']), function ($q) use ($data) {
                $q->where('user_id', $data['user_id']);
            })
            ->when(isset($data['read']), function ($q) use ($data) {
                $q->where('read', $data['read']);
            })
            ->when(isset($data['order_by']), function ($q) use ($data) {
                $q->orderBy($data['order_by'], $data['order_desc'] ? 'desc' : 'asc');
            }, function ($q) {
                $q->latest();
            });

        return isset($data['page']) ? $notifications->paginate($data['limit'] ?? 10) : $notifications->get();
    }
}
