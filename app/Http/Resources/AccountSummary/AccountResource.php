<?php

namespace App\Http\Resources\AccountSummary;

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
            'name' => $this->user->username . ' ' . $this->name,
            'available_income' => $this->balanceFloat,
            'monthly_sharing' => [
                'required_directs' => config('app.requirements.monthly_qualifiers.direct_referral'),
                'total_directs' => $this->notRelatedDirects($request->year ?? date('Y'), $request->month ?? date('m'))
            ],
            'created_at' => $this->created_at->format('Y-m-d H:i:s')
        ];
    }
}
