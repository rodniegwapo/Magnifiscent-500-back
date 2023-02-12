<?php

namespace App\Http\Resources\Guest;

use Illuminate\Http\Resources\Json\JsonResource;

class AccountResource extends JsonResource
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
            'user' => new UserResource($this->user),
            'referrer_id' => $this->referrer_id,
            'name' => $this->name,
            'created_at' => $this->created_at->format('Y-m-d H:i:s')
        ];
    }
}
