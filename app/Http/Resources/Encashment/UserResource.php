<?php

namespace App\Http\Resources\Encashment;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
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
            'first_name' => $this->first_name,
            'middle_name' => $this->middle_name,
            'last_name' => $this->last_name,
            'email' => $this->email,
            'username' => $this->username,
            'mobile_no' => $this->mobile_no,
            'encashment_details' => $this->encashmentDetails($request->status)
        ];
    }
}
