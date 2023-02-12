<?php

namespace App\Console\Commands\Production;

use Carbon\Carbon;
use Illuminate\Console\Command;

class MonthlySharingPoll extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'distribute:monthly-sharing-poll';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Distribute Monthly Sharing Poll';

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
        // Check first if monthly sharing is already distributed
        $lastMonth = Carbon::now()->subDay();
        $year = $lastMonth->format('Y');
        $month = $lastMonth->format('m');
        if (! app('Transaction')->monthlySharingAlreadyDistributed($year, $month)) {
            app('TransactionService')->distributeMonthlySharingPoll($year, $month);
        }
    }
}
