<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $seeders = [
            'Database\Seeders\RoleSeeder',
            'Database\Seeders\SellerSeeder',
            'Database\Seeders\UserSeeder'
        ];

        if (config('app.env') === 'production') {
            $seeders = array_merge($seeders, [
                'Database\Seeders\Production\AdminSeeder'
            ]);
        } else {
            $seeders = array_merge($seeders, [
                'Database\Seeders\Local\UserSeeder',
                'Database\Seeders\Local\AnnouncementSeeder',
                'Database\Seeders\Local\PackageCodeSeeder',
                'Database\Seeders\Local\TicketSeeder'
            ]);
        }
        $this->call($seeders);
    }
}
