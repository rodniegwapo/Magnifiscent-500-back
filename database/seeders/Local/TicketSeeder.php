<?php

namespace Database\Seeders\Local;

use Illuminate\Database\Seeder;

class TicketSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        app('Ticket')->factory()
            ->count(100)
            ->create();
    }
}
