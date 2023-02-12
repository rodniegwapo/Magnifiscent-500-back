<?php

namespace App\Console\Commands\Production;

use Illuminate\Console\Command;

class UpdateDistributedTableOfExit extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'table-of-exit:update-distributed-rewards';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Update distributed table of exit rewards amount based on config';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $rewards = app('Transaction')
            ->where('meta->type', 'Table Of Exit')
            ->where('amount', '!=', 0)
            ->get();
        foreach ($rewards as $reward) {
            $toe = app('TableOfExit')->find($reward->meta['table_id']);
            $newReward = config('app.rewards.toe.t' . $toe->table_level);
            $reward->update(['amount' => $newReward * 100 ]);
            $account = $reward->payable;
            $account->wallet->refreshBalance();
        }
    }
}
