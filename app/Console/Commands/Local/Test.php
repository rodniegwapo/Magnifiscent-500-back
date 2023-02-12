<?php

namespace App\Console\Commands\Local;

use App\Models\TableOfExit;
use Carbon\Carbon;
use Illuminate\Console\Command;

class Test extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'local:test';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'For testing code but must not create syntax error';

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
        
    }
}
