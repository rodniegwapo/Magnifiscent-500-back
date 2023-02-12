<?php

namespace App\Jobs\TableOfExit;

use App\Models\Account;
use App\Models\TableOfExit;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class TableNextLevelJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $tableOfExit, $tableLevel;

    /**
     * Create a new job instance.
     *
     * @param App\Models\TableOfExit $tableOfExit
     * @param int $tableLevel
     * @return void
     */
    public function __construct(TableOfExit $tableOfExit, int $tableLevel)
    {
        $this->tableOfExit = $tableOfExit;
        $this->tableLevel = $tableLevel;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        app('TableOfExitService')->tableNextLevel($this->tableOfExit, $this->tableLevel);
    }
}
