<?php

namespace Database\Seeders;

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
        // Create User with three accounts (this accounts will be the company accounts)
        $user = app('User')->create([
            'role_id' => 3,
            'first_name' => 'Magnifiscent500',
            'last_name' => 'Premium',
            'email' => 'magnifiscent500@gmail.com',
            'username' => 'magnifiscent500',
            'password' => bcrypt('password')
        ]);
        // Get 3 Package Codes (This package codes are created by the time the first seller is created.)
        $packageCodes = app('PackageCode')->whereNull('account_id')->limit(3)->get();
        $first = app('AccountService')->store($user, $packageCodes[0]->code);
        $second = app('AccountService')->store($user, $packageCodes[1]->code, $first->id);
        $third = app('AccountService')->store($user, $packageCodes[2]->code, $first->id);
    }
}
