<?php

namespace Database\Seeders\Local;

use Illuminate\Database\Seeder;

class AnnouncementSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        app('Announcement')->factory()
            ->count(100)
            ->create();
    }
}
