<?php

namespace Database\Seeders\Production;

use Illuminate\Database\Seeder;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        app('User')->create([
            'role_id' => 1,
            'first_name' => 'Marjone',
            'last_name' => 'Pontilar',
            'email' => 'marjone123@gmail.com',
            'username' => 'marjone123',
            'password' => bcrypt('password')
        ]);
    }
}
