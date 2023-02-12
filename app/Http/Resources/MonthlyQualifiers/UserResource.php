<?php

namespace App\Http\Resources\MonthlyQualifiers;

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
            'first_name' => $this->first_name,
            'middle_name' => $this->middle_name,
            'last_name' => $this->last_name,
            'full_name' => $this->first_name . ' ' . $this->last_name,
            'email' => $this->email,
            'username' => $this->username,
            'total_accounts' => app('User')->totalAccountsById($this->id),
            'total_qualified_accounts' => app('AccountService')->qualifiedAccounts([
                'count' => true,
                'user_id' => $this->id,
                'year' => $request->year,
                'month' => $request->month
            ])
        ];
    }
}
