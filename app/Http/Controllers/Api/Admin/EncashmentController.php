<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Encashment\User as UserRequest;
use App\Http\Resources\Encashment\UserResource;
use App\Models\User;

class EncashmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param App\Http\Requests\Encashment\User $request
     * @return \Illuminate\Http\Response
     */
    public function users(UserRequest $request)
    {
        $users = app('EncashmentService')->users($request->validated());
        $totalUnpaid = app('TransactionService')
            ->indexQuery(['meta_type' => 'Encashment', 'status' => 'unpaid'])
            ->sum('meta->net_amount');

        return UserResource::collection($users)
            ->additional(['meta' => [
                'total_unpaid' => $totalUnpaid,
            ]]);
    }

    /**
     * Mark as paid all Encashment by specified user
     *
     * @param App\Models\User $user
     * @return Illuminate\Http\Response
     */
    public function markAsPaid(User $user)
    {
        app('Transaction')
            ->whereHasMorph('payable', 'account', function ($q) use ($user) {
                $q->where('user_id', $user->id);
            })
            ->where('meta->type', 'Encashment')
            ->where('confirmed', true)
            ->chunk(100, function ($encashments) {
                foreach ($encashments as $encashment) {
                    $meta = $encashment->meta;
                    $meta['status'] = 'paid';
                    $encashment->update(['meta' => $meta]);
                }
            });

        return response()->json('User unpaid encashments are successfully paid.');
    }
}
