<?php

namespace App\Http\Resources;

use App\Http\Resources\TableOfExit\AccountResource;
use App\Models\Account;
use Illuminate\Http\Resources\Json\JsonResource;

class TableOfExitResource extends JsonResource
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
            'has_parent_same_level' => $this->hasParentSameLevel(),
            'position1' => $this->account($this->position1),
            'position2' => $this->account($this->position2),
            'position3' => $this->account($this->position3),
            'position4' => $this->account($this->position4),
            'position5' => $this->account($this->position5),
            'position6' => $this->account($this->position6),
            'position7' => $this->account($this->position7),
            'latest_table_no' => self::latestTableNo($request->account_id),
            'created_at' => $this->created_at->format('Y-m-d H:i:s')
        ];
    }

    /**
     * Transform Position resource
     *
     * @param App\Models\Account|null $account
     * @return array
     */
    public function account(Account $account = null)
    {
        return $account ? new AccountResource($account) : null;
    }

    /**
     * Get latest table no
     *
     * @param int $accountId
     * @return int
     */
    public function latestTableNo(int $accountId)
    {
        $account = app('Account')->find($accountId);
        $latest = $account->latestTableNo();
        return $latest->table_level;
    }
}
