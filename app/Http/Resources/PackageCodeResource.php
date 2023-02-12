<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PackageCodeResource extends JsonResource
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
            'account' => $this->account,
            'code' => $this->code,
            'claimed_at' => $this->claimed_at ? $this->claimed_at->format('Y-m-d H:i:s') : null,
            'claimed_by' => $this->account ? $this->account->user->username . ' ' . $this->account->name : '',
            'claimed' => (bool) $this->claimed_at,
            'created_at' => $this->created_at->format('Y-m-d H:i:s')
        ];
    }
}
