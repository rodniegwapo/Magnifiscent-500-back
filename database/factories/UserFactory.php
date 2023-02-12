<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = User::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'role_id' => $this->faker->numberBetween(1, 3),
            'first_name' => $this->faker->firstName,
            'middle_name' => $this->faker->lastName,
            'last_name' => $this->faker->lastName,
            'username' => $this->faker->unique()->userName,
            'email' => $this->faker->unique()->safeEmail,
            'password' => bcrypt(config('app.password')),
            'address' => $this->faker->address,
            'mobile_no' => $this->faker->e164PhoneNumber,
            'bdo_account' => $this->faker->bankAccountNumber,
            'eastwest_account' => $this->faker->bankAccountNumber,
            'security_bank_account' => $this->faker->bankAccountNumber
        ];
    }
}
