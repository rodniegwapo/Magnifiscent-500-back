<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\Register;
use App\Http\Requests\User\ResetPassword;
use App\Http\Requests\User\Update;
use App\Http\Requests\User\UpdatePassword;
use App\Http\Requests\User\UpdatePasswordViaReset;
use App\Http\Resources\PasswordResetResource;
use App\Http\Resources\ProfileResource;
use App\Models\PasswordReset;
use App\Notifications\ResetPasswordNotification;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class UserController extends Controller
{
    /**
     * Display the authorized user's profile.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function profile()
    {
        return new ProfileResource(auth()->user());
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  App\Http\Requests\User\Update  $request
     * @return \Illuminate\Http\Response
     */
    public function updateProfile(Update $request)
    {
        $user = auth()->user();
        $data = collect($request->validated())
            ->except('avatar')
            ->toArray();
        if ($request->hasFile('avatar')) {
            $avatar = Storage::putFile('avatars', $request->file('avatar'));
            if ($user->avatar) {
                Storage::delete($user->avatar);
            }
            $data += ['avatar' => $avatar];
        }

        $user->update($data);

        return new ProfileResource($user);
    }

    /**
     * Update the password of the authorized user.
     *
     * @param  App\Http\Requests\User\UpdatePassword  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function updatePassword(UpdatePassword $request)
    {
        $user = auth()->user();
        $user->update(['password' => bcrypt($request->new_password)]);

        return new ProfileResource($user);
    }

    /**
     * Register User with Account
     *
     * @param App\Http\Requests\User\Register $request
     * @return Illuminate\Http\Response
     */
    public function register(Register $request)
    {
        $data = collect($request->validated())
            ->except(['confirm_password', 'password', 'package_code', 'referrer_id'])
            ->toArray();
        $data += ['password' => bcrypt($request->password)];
        $user = app('UserService')->register($data, $request->package_code, $request->referrer_id);

        return new ProfileResource($user);
    }

    /**
     * Send Reset Password
     *
     * @param App\Http\Requests\User\ResetPassword $request
     * @return Illuminate\Http\Response
     */
    public function resetPassword(ResetPassword $request)
    {
        $user = app('User')->where('username', $request->username)
            ->orWhere('email', $request->username)
            ->first();
        $passwordReset = app('PasswordReset')->create([
            'user_id' => $user->id,
            'token' => str_replace('-', '', Str::uuid())
        ]);
        $user->notify(new ResetPasswordNotification($passwordReset));

        return response()->json('success');
    }

    /**
     * Get specified Password Reset
     *
     * @param string $token
     * @return Illuminate\Http\Response
     */
    public function getPasswordReset(string $token)
    {
        $passwordReset = app('PasswordReset')->where(DB::raw('BINARY `token`'), $token)->firstOrFail();
        if ($passwordReset->used || Carbon::now()->diffInHours($passwordReset->created_at, false) >= 24) {
            abort(404, 'Password reset request is expired.');
        }

        return new PasswordResetResource($passwordReset);
    }

    /**
     * Update Password via password reset
     *
     * @param App\Http\Requests\User\UpdatePasswordViaReset $request
     * @return Illuminate\Http\Response
     */
    public function updatePasswordViaReset(UpdatePasswordViaReset $request)
    {
        $passwordReset = app('PasswordReset')->where(DB::raw('BINARY `token`'), $request->token)->firstOrFail();
        $user = $passwordReset->user;
        $user->update(['password' => bcrypt($request->new_password)]);
        $passwordReset->update(['used' => 1]);

        return response()->json('Password is updated successfully.');
    }

    /**
     * Log out current user and device
     *
     * @return Illuminate\Http\Response
     */
    public function logOut()
    {
        auth()->user()->token()->delete();

        return response()->json('Successfully logged out.');
    }
}
