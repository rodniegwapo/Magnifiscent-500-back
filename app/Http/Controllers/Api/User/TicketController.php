<?php

namespace App\Http\Controllers\Api\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\Ticket\User\Index;
use App\Http\Requests\Ticket\User\Store;
use App\Http\Resources\TicketResource;
use App\Models\Ticket;
use Illuminate\Support\Facades\Storage;

class TicketController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param App\Http\Requests\Ticket\User\Index $request
     * @return \Illuminate\Http\Response
     */
    public function index(Index $request)
    {
        $payload = $request->validated() + ['user_id' => auth()->id()];
        $tickets = app('TicketService')->index($payload);

        return TicketResource::collection($tickets);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  App\Http\Requests\Ticket\User\Store  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Store $request)
    {
        $image = null;
        if ($request->hasFile('image')) {
            $image = Storage::putFile('issues', $request->file('image'));
        }
        $data = collect($request->validated())
            ->except('image')
            ->toArray();
        $data += ['image' => $image, 'user_id' => auth()->id()];
        $ticket = app('Ticket')->create($data);

        return new TicketResource($ticket);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Ticket  $ticket
     * @return \Illuminate\Http\Response
     */
    public function show(Ticket $ticket)
    {
        $this->authorize('view', $ticket);

        return new TicketResource($ticket);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  App\Http\Requests\Ticket\User\Store  $request
     * @param  \App\Models\Ticket  $ticket
     * @return \Illuminate\Http\Response
     */
    public function update(Store $request, Ticket $ticket)
    {
        $this->authorize('view', $ticket);
        abort_if($ticket->status !== 'pending', 403, 'This action is unauthorized.');

        $data = collect($request->validated())
            ->except('image')
            ->toArray();
        if ($request->hasFile('image')) {
            $image = Storage::putFile('issues', $request->file('image'));
            $data += ['image' => $image];
            if ($ticket->image) {
                Storage::delete($ticket->image);
            }
        }
        $ticket->update($data);

        return new TicketResource($ticket);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Ticket  $ticket
     * @return \Illuminate\Http\Response
     */
    public function destroy(Ticket $ticket)
    {
        $this->authorize('view', $ticket);
        abort_if($ticket->status !== 'pending', 403, 'This action is unauthorized.');

        if ($ticket->image) {
            Storage::delete($ticket->image);
        }

        $ticket->delete();
        return new TicketResource($ticket);
    }
}
