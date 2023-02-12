<?php

namespace App\Services;

use App\Jobs\TableOfExit\TableNextLevelJob;
use App\Models\Account;
use App\Models\TableOfExit;
use Illuminate\Support\Str;

class TableOfExitService
{
    /**
     * Process Table first level
     *
     * @param App\Models\Account $account
     * @return void
     */
    public function tableFirstLevel(Account $account)
    {
        $referrer = $account->referrer;
        if ($referrer) {
            $tableOfExit = $referrer->tableOfExitWithSlot(1);
            $tableOfExit->addAccount($account);
            // Check if table of exit is full
            if (! empty($tableOfExit->position_7)) {
                // Give reward to account that exited the table
                $position1 = $tableOfExit->position1;
                $reward = $position1->reward(1);
                $position1->depositFloat($reward, [
                    'type' => 'Table Of Exit',
                    'table_id' => $tableOfExit->id,
                    'table_level' => 1
                ]);
                // Process next level of table of exit if account is not admin
                if (! empty($position1->user_id)) {
                    $position1->createNotification('Table Of Exit');
                    // Add exited account to the next level of table of exit
                    TableNextLevelJob::dispatch($tableOfExit, 2)->onQueue('low');
                }
                // Create new Table of exit for Left and Right
                $tableOfExit->splitToe();
            }
        } else {
            $account->createNewToe();
        }
    }

    /**
     * Process Table level 2 to 5
     *
     * @param App\Models\TableOfExit $tableOfExit
     * @param int $tableLevel
     * @return void
     */
    public function tableNextLevel(TableOfExit $tableOfExit, int $tableLevel)
    {
        // Max table of exit level is 5
        if ($tableLevel <= 5) {
            $exitedAccount = $tableOfExit->position1;
            $toeNextLevel = $tableOfExit->withSlot($tableLevel);
            $toeNextLevel->addAccount($exitedAccount);
            // Check if table of exit is full
            if (! empty($toeNextLevel->position_7)) {
                // Give reward to account that exited the table
                $position1 = $toeNextLevel->position1;
                $reward = $position1->reward($tableLevel);
                $position1->depositFloat($reward, [
                    'type' => 'Table Of Exit',
                    'table_id' => $toeNextLevel->id,
                    'table_level' => $tableLevel
                ]);
                // Process next level of table of exit if account is not admin
                if (! empty($position1->user_id)) {
                    $position1->createNotification('Table Of Exit');
                    // Add exited account to the next level of table of exit
                    TableNextLevelJob::dispatch($toeNextLevel, $tableLevel + 1)->onQueue($this->priority($tableLevel + 1));
                }
                // Create new Table of exit for Left and Right
                $toeNextLevel->splitToe();
            }
        }
    }

    /**
     * Set Queue priority based on table level
     *
     * @param int $tableLevel
     * @return string
     */
    public function priority(int $tableLevel)
    {
        switch ($tableLevel) {
            case 2:
                return 'low';
            case 3:
                return 'high';
            case 4:
                return 'higher';
            case 5:
                return 'highest';
            default:
                return 'default';
        }
    }
}
