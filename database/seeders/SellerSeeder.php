<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class SellerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $seller = app('User')->create([
            'role_id' => 2,
            'first_name' => 'Seller',
            'last_name' => 'Seller',
            'email' => 'seller@gmail.com',
            'username' => 'seller',
            'password' => bcrypt('password')
        ]);

        app('PackageCodeService')->store($seller->id, 3);
    }
}
