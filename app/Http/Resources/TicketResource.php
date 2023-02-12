<?php

namespace App\Http\Resources;

use App\Http\Resources\Guest\UserResource;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class TicketResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'user_id' => $this->user_id,
            'user' => new UserResource($this->user),
            'issue' => $this->issue,
            'description' => $this->description,
            'image' => $this->image ? Storage::url($this->image) : null,
            'note' => $this->note,
            'status' => $this->status,
            'created_at' => $this->created_at->format('Y-m-d H:i:s')
        ];
    }
}
