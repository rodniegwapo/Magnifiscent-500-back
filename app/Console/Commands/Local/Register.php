<?php

namespace App\Console\Commands\Local;

use Illuminate\Console\Command;
use Faker\Factory;

class Register extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'local:register {referrer_id?}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create user with account with/without referrer';

    protected $faker;

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
        $this->faker = Factory::create();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $data = [
            'first_name' => $this->faker->firstName,
            'middle_name' => $this->faker->lastName,
            'last_name' => $this->faker->lastName,
            'username' => $this->faker->unique()->userName,
            'email' => $this->faker->unique()->safeEmail,
            'password' => bcrypt(config('app.password'))
        ];
        $code = app('PackageCode')->available();
        $referrer_id = $this->argument('referrer_id');

        app('UserService')->register($data, $code->code, $referrer_id);
    }
}
