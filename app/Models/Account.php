<?php

namespace App\Models;

use App\Helpers\Overloading;
use App\Traits\ModelTrait;
use Bavix\Wallet\Interfaces\Confirmable;
use Bavix\Wallet\Interfaces\Wallet;
use Bavix\Wallet\Interfaces\WalletFloat;
use Bavix\Wallet\Traits\CanConfirm;
use Bavix\Wallet\Traits\HasWalletFloat;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Str;

class Account extends Model implements Wallet, WalletFloat, Confirmable
{
    use HasWalletFloat, HasFactory, CanConfirm, Notifiable, ModelTrait;

    /**
     * The attributes that aren't mass assignable.
     *
     * @var array
     */
    protected $guarded = [];

    /**
     * Route notifications for the mail channel.
     *
     * @param  \Illuminate\Notifications\Notification  $notification
     * @return array|string
     */
    public function routeNotificationForMail($notification)
    {
        return $this->user->email;
    }

    /**
     * Create Notification for User
     *
     * @param string $transactionType
     * @return Illuminate\Database\Eloquent\Model
     */
    public function createNotification(string $transactionType)
    {
        return app('Notification')->create([
            'user_id' => $this->user_id,
            'title' => $transactionType,
            'message' => $this->constructNotificationMessage($transactionType),
            'read' => 0
        ]);
    }

    /**
     * Construct Notification message for specified transaction
     *
     * @param string $transactionType
     * @return string
     */
    public function constructNotificationMessage(string $transactionType)
    {
        $account = $this->user->username . ' ' . $this->name;
        switch ($transactionType) {
            case 'Direct Referral':
                return 'Your account ' . $account . ' received a Direct Referral Bonus';
            case 'Table Of Exit':
                return 'Your account ' . $account . ' received a Table Of Exit Bonus';
            case 'Monthly Sharing Poll':
                return 'Your account ' . $account . ' received a Monthly Sharing Poll Bonus';
            case 'Encashment':
                return 'Your encashment request from your ' . $account . ' has been approved.';
            default:
                return '';
        }
    }

    /**
     * Get User
     */
    public function user()
    {
        return $this->belongsTo(User::class)->withTrashed();
    }

    /**
     * Get Referrer Account
     */
    public function referrer()
    {
        return $this->belongsTo(Account::class, 'referrer_id');
    }

    /**
     * Get Referred Accounts
     */
    public function referredAccounts()
    {
        return $this->hasMany(Account::class, 'referrer_id');
    }

    /**
     * Get Referred Accounts Checkers (This is checked if there's duplication)
     */
    public function referredAccountsByUser()
    {
        return $this->hasMany(DirectReferralChecker::class);
    }

    /**
     * Add account user's last_name and middle_name
     * if referred account has user's last_name and middle_name that not already exists in direct referral
     * by month
     *
     * @return void
     */
    public function referredAccountsChecker()
    {
        if ($this->referrer && $this->referrer->user_id != $this->user_id) {
            $checker = $this->referrer->referredAccountsByUser()
                ->where(function ($q) {
                    $q->where('referred_last_name', $this->user->last_name)
                    ->where('referred_middle_name', $this->user->middle_name);
                })
                ->whereYear('created_at', date('Y'))
                ->whereMonth('created_at', date('m'))
                ->first();
            if (! $checker) {
                $this->referrer->referredAccountsByUser()->create([
                    'referred_last_name' => $this->user->last_name, 'referred_middle_name' => $this->user->middle_name
                ]);
            }
        }
    }

    /**
     * Get Package Code
     */
    public function packageCode()
    {
        return $this->hasOne(PackageCode::class);
    }

    /**
     * Get Table of Exists (check every position)
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $q
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeTableOfExits($q)
    {
        return app('TableOfExit')->where(function ($q) {
            for ($i = 0; $i < 7; $i++) {
                if (! $i) {
                    $q->where('position_1', $this->id);
                } else {
                    $q->orWhere('position_' . ($i + 1), $this->id);
                }
            }
        });
    }

    /**
     * Get latest table of exit 
     *
     * @return Illuminate\Database\Eloquent\Model
     */
    public function latestTableNo()
    {
        return $this->tableOfExits()
            ->orderBy('table_level', 'desc')
            ->latest()
            ->first();
    }

    /**
     * Get Admin Accounts
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $q
     * @param bool $admin
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeAdmin($q, bool $admin = true)
    {
        return $q->when($admin, function ($q) {
            $q->whereNull('user_id');
        }, function ($q) {
            $q->whereNotNull('user_id');
        });
    }

    /**
     * Get Specific reward by table level
     *
     * @param int $tableLevel
     * @return float
     */
    public function reward(int $tableLevel)
    {
        return (float) ($this->user_id ? config('app.rewards.toe.t' . $tableLevel) : 0);
    }

    /**
     * Create 3 new admin accounts
     *
     * @return array|object
     */
    public function createAdminAccounts()
    {
        $position1 = app('Account')->create(['code' => str_replace('-', '', Str::uuid())]);
        $position2 = app('Account')->create(['code' => str_replace('-', '', Str::uuid())]);
        $position3 = app('Account')->create(['code' => str_replace('-', '', Str::uuid())]);

        $overloading = new Overloading();
        $overloading->first = $position1->id;
        $overloading->second = $position2->id;
        $overloading->third = $position3->id;
        return $overloading;
    }

    /**
     * Create new Table of Exit with 3 admin accounts
     *
     * @return Illuminate\Database\Eloquent\Model
     */
    public function createNewToe()
    {
        // Create Table of exit with 3 admin accounts
        return app('TableOfExit')->create([
            'table_level' => 1,
            'position_1' => $this->id
        ]);
    }

    /**
     * Get Table of Exit with available slot
     *
     * @param int $tableLevel
     * @return Illuminate\Database\Eloquent\Model|null
     */
    public function tableOfExitWithSlot(int $tableLevel)
    {
        // Find referrer table of exit table (this will act as main reference of table of exit)
        $account = $this;
        $referrerToe = $account->tableOfExits()
            ->withDepth()
            ->where('table_level', $tableLevel)
            ->latest()
            ->first();
        while ($account && empty($referrerToe)) {
            $account = $account->referrer;
            $referrerToe = empty($account) ? null : $account->tableOfExits()
                ->withDepth()
                ->where('table_level', $tableLevel)
                ->latest()
                ->first();
        }
        // Return null if not found - this means that the downline exited first
        // before this account and all upline also not exited yet
        if (! $referrerToe) {
            return null;
        }
        if (! $referrerToe->position_7) {
            return $referrerToe;
        }
        // If position 7 is filled, it will split and will consist of left and right
        $both = app('TableOfExit')
            ->where('parent_id', $referrerToe->id)
            ->where('table_level', $tableLevel)
            ->orderBy('created_at', 'desc')
            ->get();
        if (count($both) < 2) {
            abort(500, 'Upline table of exit didn\'t split.');
        }
        $left = $both[0];
        $right = $both[1];
        // Check if one of them is full
        // or what table has less filled slots to be filled for fairness distribution of downline
        $totalLeft = $left->totalFilledSlots();
        $totalRight = $right->totalFilledSlots();
        if ($totalLeft <= $totalRight && $totalLeft < 7) {
            return $left;
        }
        if ($totalRight <= $totalLeft && $totalRight < 7) {
            return $right;
        }
        // This time there's no checking will happen
        // as checking only concerns the first left and right table of exit, result from splitting
        $toe = null;
        $deep = $referrerToe->depth + 2;
        while (! $toe) {
            $toe = app('TableOfExit')
                ->withDepth()
                ->whereDescendantOf($referrerToe->id)
                ->whereNull('position_7')
                ->where('table_level', $tableLevel)
                ->having('depth', '=', $deep)
                ->defaultOrder()
                ->first();
            $deep += 1;
        }
        return $toe;
    }

    /**
     * Get Total Income
     *
     * @return float
     */
    public function totalIncome()
    {
        $transactions = app('Transaction')
            ->where(function ($q) {
                $q->where('payable_type', 'account')
                ->where('payable_id', $this->id);
            })
            ->where('type', 'deposit')
            ->sum('amount');

        return (float) ($transactions / 100);
    }

    /**
     * Total Direct Referrals that not belongs to the same user or the same user lastname
     *
     * @param int $year
     * @param int $month
     * @return int
     */
    public function notRelatedDirects(int $year, int $month)
    {
        $u = $this->user;
        return $this->referredAccountsByUser()
            ->where(function ($q) use ($u) {
                $q->where('referred_last_name', '!=', $u->last_name)
                ->orWhere(function ($q) use ($u) {
                    $q->where('referred_last_name', $u->last_name)
                    ->where('referred_middle_name', '!=', $u->middle_name);
                });
            })
            ->whereYear('created_at', $year)
            ->whereMonth('created_at', $month)
            ->count();
    }
}
