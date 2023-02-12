<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PackageCode extends Model
{
    use HasFactory;

    /**
     * The attributes that aren't mass assignable.
     *
     * @var array
     */
    protected $guarded = [];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'claimed_at' => 'datetime',
    ];

    /**
     * Get Account
     */
    public function account()
    {
        return $this->belongsTo(Account::class);
    }

    /**
     * Get Seller
     */
    public function seller()
    {
        return $this->belongsTo(User::class, 'seller_id');
    }

    /**
     * Get Available Package Code
     *
     * @return Illuminate\Database\Eloquent\Model|object|null
     */
    public function available()
    {
        return $this->whereNull('account_id')->first();
    }
}
