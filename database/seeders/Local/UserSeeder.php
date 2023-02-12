<?php

namespace Database\Seeders\Local;

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        app('User')->factory()
            // ->has(app('Account')->factory()->count(3))
            ->count(50)
            ->create();
    }
}
