<?php

namespace App\Http\Resources;

use App\Http\Resources\Transaction\AccountResource;
use Illuminate\Http\Resources\Json\JsonResource;

class TransactionResource extends JsonResource
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
            'type' => $this->type,
            'amount' => (float) ($this->type == 'withdraw' ? $this->amount * -1 : $this->amount) / 100,
            'account' => new AccountResource($this->payable),
            'referred_account' => $this->referredAccount(),
            'confirmed' => (bool) $this->confirmed,
            'meta' => $this->meta,
            'mobile_no' => $this->payable->user->mobile_no,
            'bank_account' => $this->getBankAccount(),
            'created_at' => $this->created_at->format('Y-m-d H:i:s')
        ];
    }

    /**
     * Get Referred Account if Direct Referral
     *
     * @return array
     */
    public function referredAccount()
    {
        if (isset($this->meta['type']) && $this->meta['type'] === 'Direct Referral') {
            $account = app('Account')->find($this->meta['referred_id']);
            return new AccountResource($account);
        }

        return null;
    }

    /**
     * Get Bank Account
     *
     * @return string|null
     */
    public function getBankAccount()
    {
        $paymentChannel = $this->meta['payment_channel'] ?? null;
        switch ($paymentChannel) {
            case 'BDO':
                return $this->payable->user->bdo_account;
            case 'Eastwest':
                return $this->payable->user->eastwest_account;
            case 'Security Bank':
                return $this->payable->user->security_bank_account;
            default:
                return null;
        }
    }
}
