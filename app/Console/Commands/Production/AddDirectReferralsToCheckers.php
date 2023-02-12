<?php

namespace App\Console\Commands\Production;

use Illuminate\Console\Command;

class AddDirectReferralsToCheckers extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'direct-referral:add-to-checkers';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Add Direct Referral to checkers to make sure there are no related users';

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
        app('Account')->chunk(100, function ($accounts) {
            foreach ($accounts as $account) {
                $referrer = $account->referrer;
                $account->referredAccountsChecker();
            }
        });
    }
}
