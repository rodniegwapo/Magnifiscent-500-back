<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Kalnoy\Nestedset\NodeTrait;

class TableOfExit extends Model
{
    use NodeTrait, HasFactory;

    /**
     * The attributes that aren't mass assignable.
     *
     * @var array
     */
    protected $guarded = [];

    /**
     * Get Account in Position1
     */
    public function position1()
    {
        return $this->belongsTo(Account::class, 'position_1');
    }

    /**
     * Get Account in Position2
     */
    public function position2()
    {
        return $this->belongsTo(Account::class, 'position_2');
    }

    /**
     * Get Account in Position3
     */
    public function position3()
    {
        return $this->belongsTo(Account::class, 'position_3');
    }

    /**
     * Get Account in Position4
     */
    public function position4()
    {
        return $this->belongsTo(Account::class, 'position_4');
    }

    /**
     * Get Account in Position5
     */
    public function position5()
    {
        return $this->belongsTo(Account::class, 'position_5');
    }

    /**
     * Get Account in Position6
     */
    public function position6()
    {
        return $this->belongsTo(Account::class, 'position_6');
    }

    /**
     * Get Account in Position7
     */
    public function position7()
    {
        return $this->belongsTo(Account::class, 'position_7');
    }

    /**
     * Check if the parent is same table level
     *
     * @return bool
     */
    public function hasParentSameLevel()
    {
        return $this->parent && $this->parent->table_level === $this->table_level;
    }

    /**
     * Add account to available slot
     *
     * @param App\Models\Account $account
     * @return void
     */
    public function addAccount(Account $account)
    {
        if (! $this->position_1) {
            $this->position_1 = $account->id;
        } else if (! $this->position_2) {
            $this->position_2 = $account->id;
        } else if (! $this->position_3) {
            $this->position_3 = $account->id;
        } else if (! $this->position_4) {
            $this->position_4 = $account->id;
        } else if (! $this->position_5) {
            $this->position_5 = $account->id;
        } else if (! $this->position_6) {
            $this->position_6 = $account->id;
        } else {
            $this->position_7 = $account->id;
        }
        $this->save();
    }

    /**
     * Get Total Filled Slots
     *
     * @return int
     */
    public function totalFilledSlots()
    {
        // This is the number of slots of automated filled slots
        $totalFilledSlots = 3;
        if ($this->position_4) { $totalFilledSlots += 1; }
        if ($this->position_5) { $totalFilledSlots += 1; }
        if ($this->position_6) { $totalFilledSlots += 1; }
        if ($this->position_7) { $totalFilledSlots += 1; }

        return $totalFilledSlots;
    }

    /**
     * Create Table of exit children for exiting position 1
     *
     * @return void
     */
    public function splitToe()
    {
        $this->children()->create([
            'table_level' => $this->table_level,
            'position_1' => $this->position_2,
            'position_2' => $this->position_4,
            'position_3' => $this->position_5
        ]);
        $this->children()->create([
            'table_level' => $this->table_level,
            'position_1' => $this->position_3,
            'position_2' => $this->position_6,
            'position_3' => $this->position_7
        ]);
    }

    /**
     * Create New 1 Table of exit children for adding exited account to next level
     *
     * @param Illuminate\Database\Eloquent\Model
     */
    public function createNew()
    {
        $adminAccounts = app('Account')->createAdminAccounts();
        return $this->children()->create([
            'table_level' => $this->table_level + 1,
            'position_1' => $adminAccounts->first,
            'position_2' => $adminAccounts->second,
            'position_3' => $adminAccounts->third
        ]);
    }

    /**
     * Get TableOfExit with slot based on table level and referrer
     *
     * @param int $tableLevel
     * @return Illuminate\Database\Eloquent\Model
     */
    public function withSlot(int $tableLevel)
    {
        // Check if the exited account has referrer
        if (! empty($this->position1->referrer_id)) {
            // Check first if referrer has table of exit or else create new
            $referrerToe = $this->position1->referrer->tableOfExitWithSlot($tableLevel);
            if ($referrerToe) {
                return $referrerToe;
            }
        }

        return $this->createNew();
    }
}
