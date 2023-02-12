<?php

namespace App\Models;

use App\Traits\ModelTrait;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, SoftDeletes, HasFactory, Notifiable, ModelTrait;

    /**
     * The attributes that aren't mass assignable.
     *
     * @var array
     */
    protected $guarded = [];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * Find the user instance for the given username.
     *
     * @param  string  $username
     * @return \App\Models\User
     */
    public function findForPassport($username)
    {
        return $this->where(function ($q) use ($username) {
            $q->where('username', $username)
            ->orWhere('email', $username);
        })
        ->whereNull('deleted_at')
        ->first();
    }

    /**
     * Get Notifications
     */
    public function notifications()
    {
        return $this->hasMany(Notification::class);
    }

    /**
     * Total Unread Notifications
     */
    public function totalUnreadNotifications()
    {
        return $this->notifications()->where('read', 0)->count();
    }

    /**
     * Get Accounts
     */
    public function accounts()
    {
        return $this->hasMany(Account::class);
    }

    /**
     * Get Password Resets
     */
    public function passwordResets()
    {
        return $this->hasMany(PasswordReset::class);
    }

    /**
     * Get Package Codes
     */
    public function packageCodes()
    {
        return $this->hasMany(PackageCode::class, 'seller_id');
    }

    /**
     * Get Total Accounts
     */
    public function totalAccounts()
    {
        return $this->accounts()->count();
    }

    /**
     * Get Total Accounts By Id
     *
     * @param int $id
     * @return int
     */
    public function totalAccountsById(int $id)
    {
        $user = app('User')->findOrFail($id);
        return $user->accounts()->count();
    }

    /**
     * Get Role
     */
    public function role()
    {
        return $this->belongsTo(Role::class);
    }

    /**
     * Get Users By Role
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $q
     * @param string $role
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeByRole($q, string $role)
    {
        return $q->whereHas('role', function ($q) use ($role) {
            $q->where('slug', $role);
        });
    }

    /**
     * Get First Seller
     *
     * @return Illuminate\Database\Eloquent\Model|object|null
     */
    public function seller()
    {
        return $this->whereHas('role', function ($q) {
            $q->where('slug', 'seller');
        })
        ->first();
    }

    /**
     * Get Encashment Details
     *
     * @param string|null status (paid or unpaid)
     * @return array
     */
    public function encashmentDetails(string $status = null)
    {
        $encashment = $this->initEncashmentDetailsQuery($status)->latest()->first();
        $amount = ($this->initEncashmentDetailsQuery($status)->sum('amount') / 100) * -1;
        $taxFee = $this->initEncashmentDetailsQuery($status)->sum('meta->tax_fee');
        $adminFee = $this->initEncashmentDetailsQuery($status)->sum('meta->admin_fee');
        $netAmount = $this->initEncashmentDetailsQuery($status)->sum('meta->net_amount');

        return [
            'payment_channel_type' => $encashment->meta['payment_channel_type'],
            'payment_channel' => $encashment->meta['payment_channel'],
            'bank_account' => $this->getBankAccount($encashment->meta['payment_channel']),
            'amount' => $amount,
            'tax_fee' => $taxFee,
            'admin_fee' => $adminFee,
            'net_amount' => $netAmount,
            'created_at' => $encashment->created_at->format('Y-m-d H:i:s')
        ];
    }

    /**
     * Payment details initial query
     *
     * @param string|null $status (paid or unpaid)
     * @return Illuminate\Database\Eloquent\Builder $q
     */
    public function initEncashmentDetailsQuery(string $status = null)
    {
        return app('Transaction')
            ->whereHasMorph('payable', 'account', function ($q) {
                $q->where('user_id', $this->id);
            })
            ->when(! empty($status), function ($q) use ($status) {
                $q->where('meta->status', $status);
            });
    }

    /**
     * Get Bank Account
     *
     * @return string|null
     */
    public function getBankAccount($paymentChannel)
    {
        switch ($paymentChannel) {
            case 'BDO':
                return $this->bdo_account;
            case 'Eastwest':
                return $this->eastwest_account;
            case 'Security Bank':
                return $this->security_bank_account;
            default:
                return null;
        }
    }

    /**
     * Re Check referrer direct referrals checkers
     * applicable for current month only to prevent destroying msb record
     *
     * @param string|null $oldMiddleName
     * @param string $oldLastName
     * @param string|null $newMiddleName
     * @param string $newLastName
     * @return void
     */
    public function recheckReferrerDirectReferral(
        string $oldMiddleName = null,
        string $oldLastName,
        string $newMiddleName = null,
        string $newLastName
    ) {
        // Check first if middle name or last name changed
        if ($oldLastName != $newLastName || $oldMiddleName != $newMiddleName) {
            $firstAccount = $this->accounts()->orderBy('name', 'asc')->first();
            if ($firstAccount && $firstAccount->referrer) {
                $referrer = $firstAccount->referrer;
                // The User details is already updated so
                // let's check if there are referred accounts with the same old middle and last name
                $accountsWithTheSameOldName = $referrer->referredAccounts()
                    ->whereHas('user', function ($q) use ($oldMiddleName, $oldLastName) {
                        $q->where('middle_name', $oldMiddleName)
                        ->where('last_name', $oldLastName);
                    })
                    ->whereYear('created_at', date('Y'))
                    ->whereMonth('created_at', date('m'))
                    ->count();
                // Determine if there is/are more referred accounts
                if ($accountsWithTheSameOldName > 0) {
                    $firstAccount->referredAccountsChecker();
                } else {
                    // Delete old checker
                    // as we need to check again the referred accounts
                    $oldChecker = $referrer->referredAccountsByUser()
                        ->whereYear('created_at', date('Y'))
                        ->whereMonth('created_at', date('m'))
                        ->where('referred_middle_name', $oldMiddleName)
                        ->where('referred_last_name', $oldLastName)
                        ->first();
                    if ($oldChecker)
                        $oldChecker->delete();
                    // Add new checker if no checker with the same info
                    $firstAccount->referredAccountsChecker();
                }
            }
        }
    }
}
