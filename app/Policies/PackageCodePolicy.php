<?php

namespace App\Policies;

use App\Models\PackageCode;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class PackageCodePolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\PackageCode  $packageCode
     * @return mixed
     */
    public function view(User $user, PackageCode $packageCode)
    {
        return $user->id === $packageCode->seller_id;
    }
}
