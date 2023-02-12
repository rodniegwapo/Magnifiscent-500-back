<?php

namespace App\Http\Resources;

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
            'user_id' => $this->user_id,
            'code' => $this->code,
            'referrer_id' => $this->referrer_id,
            'name' => $this->name,
            'total_commission' => $this->balanceFloat,
            'created_at' => $this->created_at->format('Y-m-d H:i:s')
        ];
    }
}
