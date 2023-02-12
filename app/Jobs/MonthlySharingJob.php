<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class MonthlySharingJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $accounts, $reward, $year, $month;

    /**
     * Create a new job instance.
     *
     * @param Illuminate\Database\Eloquent\Collection $accounts
     * @param float $reward
     * @param int $year
     * @param int $month
     * @return void
     */
    public function __construct(Collection $accounts, float $reward, int $year, int $month)
    {
        $this->accounts = collect($accounts);
        $this->reward = $reward;
        $this->year = $year;
        $this->month = $month;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        foreach ($this->accounts as $account) {
            $account->depositFloat($this->reward, [
                'type' => 'Monthly Sharing Poll',
                'year' => $this->year,
                'month' => $this->month
            ]);
            $account->createNotification('Monthly Sharing Poll');
        }
    }
}
