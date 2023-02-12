<?php

namespace App\Console\Commands\Production;

use Illuminate\Console\Command;

class ApprovedAllEncashment extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'encashment:approve';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Approve Encashment and add paid status to all paid encashment.';

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
        // Approved all pending encashments and refresh wallet
        app('Transaction')
        ->where('meta->type', 'Encashment')
        ->where('confirmed', false)
        ->chunk(100, function ($encashments) {
            foreach ($encashments as $encashment) {
                $account = $encashment->payable;
                $account->confirm($encashment);
                $account->wallet->refreshBalance();
            }
        });
        // Add paid status to all confirmed encashments
        app('Transaction')
        ->where('meta->type', 'Encashment')
        ->where('confirmed', true)
        ->chunk(100, function ($encashments) {
            foreach ($encashments as $encashment) {
                $meta = $encashment->meta;
                $meta['status'] = 'unpaid';
                $encashment->update(['meta' => $meta]);
            }
        });
    }
}
