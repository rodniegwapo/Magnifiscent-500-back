<?php

namespace App\Services;

class LogService
{
    /**
     * Get Logs
     *
     * @param array|null $data
     * @return array
     */
    public function index(array $data = null)
    {
        $logs = app('Log')
            ->when(isset($data['action']), function ($q) use ($data) {
                $q->where('action', $data['action']);
            })
            ->when(isset($data['user_id']), function ($q) use ($data) {
                $q->where('user_id', $data['user_id']);
            });

        return isset($data['page']) ? $logs->paginate($data['limit'] ?? 10) : $logs->get();
    }
}
