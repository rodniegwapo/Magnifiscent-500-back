<?php

namespace App\Http\Resources\TableOfExit;

use App\Http\Resources\Guest\UserResource;
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
            'name' => $this->name,
            'user' => new UserResource($this->user),
            'created_at' => $this->created_at->format('Y-m-d H:i:s')
        ];
    }
}
