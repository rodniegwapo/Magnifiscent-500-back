<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

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
            'avatar' => $this->avatar ? Storage::url($this->avatar) : null,
            'role' => $this->role,
            'first_name' => $this->first_name,
            'middle_name' => $this->middle_name,
            'last_name' => $this->last_name,
            'full_name' => $this->first_name . ' ' . $this->last_name,
            'email' => $this->email,
            'username' => $this->username,
            'mobile_no' => $this->mobile_no,
            'address' => $this->address,
            'bdo_account' => $this->bdo_account,
            'eastwest_account' => $this->eastwest_account,
            'security_bank_account' => $this->security_bank_account,
            'blocked' => $this->trashed(),
            'blocked_at' => $this->deleted_at ? $this->deleted_at->format('Y-m-d H:i:s') : null,
            'created_at' => $this->created_at->format('Y-m-d H:i:s')
        ];
    }
}
