<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\Index;
use App\Http\Requests\User\MonthlyQualifiers;
use App\Http\Requests\User\Store;
use App\Http\Requests\User\TopDistributors;
use App\Http\Requests\User\Update;
use App\Http\Requests\User\UpdatePasswordByAdmin;
use App\Http\Resources\TopDistributors\UserResource as TopDistributorsResource;
use App\Http\Resources\MonthlyQualifiers\UserResource as MonthlyQualifiersResource;
use App\Http\Resources\ProfileResource;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param App\Http\Requests\User\Index $request
     * @return \Illuminate\Http\Response
     */
    public function index(Index $request)
    {
        $users = app('UserService')->index($request->validated());

        return UserResource::collection($users);
    }

    /**
     * Display a listing of the resource.
     *
     * @param App\Http\Requests\User\MonthlyQualifiers $request
     * @return \Illuminate\Http\Response
     */
    public function monthlyQualifiers(MonthlyQualifiers $request)
    {
        $users = app('UserService')->monthlyQualifiers($request->validated());

        return MonthlyQualifiersResource::collection($users);
    }

    /**
     * Get Top Distributors
     */
    public function topDistributors(TopDistributors $request)
    {
        // Get Top Distributors
        $topDistributors = app('UserService')->topQualifiers($request->year, $request->month, $request->top);

        return TopDistributorsResource::collection($topDistributors);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  App\Http\Requests\User\Store  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Store $request)
    {
        $avatar = null;
        if ($request->hasFile('avatar')) {
            $avatar = Storage::putFile('avatars', $request->file('avatar'));
        }

        $data = collect($request->validated())
            ->except('avatar')
            ->toArray();
        $data += [
            'avatar' => $avatar,
            'password' => bcrypt(config('app.password'))
        ];
        $user = app('User')->create($data);

        return new UserResource($user);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        return new ProfileResource($user);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  App\Http\Requests\User\Update  $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Update $request, $id)
    {
        $avatar = null;
        $user = app('User')->withTrashed()->findOrFail($id);
        if ($request->hasFile('avatar')) {
            $avatar = Storage::putFile('avatars', $request->file('avatar'));
            if ($user->avatar) {
                Storage::delete($user->avatar);
            }
        }
        $oldMiddleName = $user->middle_name;
        $oldLastName = $user->last_name;
        // Update user details
        $data = collect($request->validated())
            ->except('avatar')
            ->toArray();
        $data += ['avatar' => $avatar];
        $user->update($data);
        // Recheck Direct Referral (for user only)
        if ($user->role->slug === 'user') {
            $user->recheckReferrerDirectReferral(
                $oldMiddleName,
                $oldLastName,
                $user->middle_name,
                $user->last_name
            );
        }

        return new UserResource($user);
    }

    /**
     * Update User's Password
     *
     * @param App\Http\Requests\User\UpdatePasswordByAdmin $request
     * @return Illuminate\Http\Response
     */
    public function updatePassword(UpdatePasswordByAdmin $request)
    {
        $user = app('User')->find($request->user_id);
        $user->update(['password' => bcrypt($request->new_password)]);

        return new UserResource($user);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        abort_if($user->role->slug === 'admin', 403, 'Forbidden');

        $user->delete();
        return new UserResource($user);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function restore($id)
    {
        $user = app('User')->onlyTrashed()->findOrFail($id);
        $user->restore();
        return new UserResource($user);
    }
}
