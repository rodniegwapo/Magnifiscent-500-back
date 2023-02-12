<?php

namespace App\Http\Resources\Transaction;

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
        $user = $this->user;
        return [
            'id' => $this->id,
            'name' => $user->username . ' ' . $this->name,
            'full_name' => $user->first_name . ' ' . $user->last_name,
            'middle_name' => $user->middle_name,
            'last_name' => $user->last_name
        ];
    }
}
