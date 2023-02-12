<?php

namespace App\Policies;

use Bavix\Wallet\Models\Transaction;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class TransactionPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\Models\User  $user
     * @param  Bavix\Wallet\Models\Transaction  $t
     * @return mixed
     */
    public function view(User $user, Transaction $t)
    {
        return $t->payable_type === 'account' && $user->id === $t->payable->user_id;
    }
}
