<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $roles = [
            ['name' => 'Admin', 'slug' => 'admin'],
            ['name' => 'Seller', 'slug' => 'seller'],
            ['name' => 'User', 'slug' => 'user']
        ];

        app('Role')->insert($roles);
    }
}
