<?php

namespace App\Services;

class TicketService
{
    /**
     * Get Tickets
     *
     * @param array|null $data
     * @return array
     */
    public function index(array $data = null)
    {
        $tickets = app('Ticket')
            ->when(isset($data['search']), function ($q) use ($data) {
                $columns = ['issue', 'description', 'note'];
                $q->search($data['search'], $columns);
            })
            ->when(isset($data['user_id']), function ($q) use ($data) {
                $q->where('user_id', $data['user_id']);
            })
            ->when(isset($data['status']), function ($q) use ($data) {
                $q->where('status', $data['status']);
            })
            ->when(isset($data['order_by']), function ($q) use ($data) {
                $q->orderBy($data['order_by'], $data['order_desc'] ? 'desc' : 'asc');
            }, function ($q) {
                $q->latest();
            });

        return isset($data['page']) ? $tickets->paginate($data['limit'] ?? 10) : $tickets->get();
    }
}
