<?php

namespace Database\Seeders\Local;

use Illuminate\Database\Seeder;

class PackageCodeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $seller = app('User')->seller();
        app('PackageCodeService')->store($seller->id, 1000);
    }
}
