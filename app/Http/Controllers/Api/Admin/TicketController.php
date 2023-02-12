<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Ticket\Admin\Index;
use App\Http\Requests\Ticket\Admin\Update;
use App\Http\Resources\TicketResource;
use App\Models\Ticket;
use Illuminate\Support\Facades\Storage;

class TicketController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param App\Http\Requests\Ticket\Admin\Index $request
     * @return \Illuminate\Http\Response
     */
    public function index(Index $request)
    {
        $tickets = app('TicketService')->index($request->validated());

        return TicketResource::collection($tickets);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Ticket  $ticket
     * @return \Illuminate\Http\Response
     */
    public function show(Ticket $ticket)
    {
        return new TicketResource($ticket);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  App\Http\Requests\Ticket\Admin\Update  $request
     * @param  \App\Models\Ticket  $ticket
     * @return \Illuminate\Http\Response
     */
    public function update(Update $request, Ticket $ticket)
    {
        $ticket->update($request->validated());

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
        if ($ticket->image) {
            Storage::delete($ticket->image);
        }

        $ticket->delete();
        return new TicketResource($ticket);
    }
}
