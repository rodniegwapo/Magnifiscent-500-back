<?php

namespace App\Services;

class AnnouncementService
{
    /**
     * Get Announcements
     *
     * @param array $data
     * @return array
     */
    public function index(array $data)
    {
        $announcements = app('Announcement')
            ->when(isset($data['search']), function ($q) use ($data) {
                $columns = ['title', 'description'];
                $q->search($data['search'], $columns);
            })
            ->when(isset($data['order_by']), function ($q) use ($data) {
                $q->orderBy($data['order_by'], $data['order_desc'] ? 'desc' : 'asc');
            }, function ($q) {
                $q->latest();
            });

        return isset($data['page']) ? $announcements->paginate($data['limit'] ?? 10) : $announcements->get();
    }
}
