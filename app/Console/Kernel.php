<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        // For Test Commands
        'App\Console\Commands\Local\Register',
        'App\Console\Commands\Local\Test',
        // For Production Commands,
        'App\Console\Commands\Production\AddDirectReferralsToCheckers',
        'App\Console\Commands\Production\MonthlySharingPoll',
        'App\Console\Commands\Production\UpdateDistributedTableOfExit',
        'App\Console\Commands\Production\ApprovedAllEncashment'
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        $schedule->command('distribute:monthly-sharing-poll')->monthly();
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
