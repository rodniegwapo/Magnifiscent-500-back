<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;
use Laravel\Passport\Passport;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        'App\Models\Account' => 'App\Policies\AccountPolicy',
        'App\Models\PackageCode' => 'App\Policies\PackageCodePolicy',
        'App\Models\TableOfExit' => 'App\Policies\TableOfExitPolicy',
        'App\Models\Ticket' => 'App\Policies\TicketPolicy',
        'Bavix\Wallet\Models\Transaction' => 'App\Policies\TransactionPolicy'
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        Passport::routes(function ($router) {
            $router->forAccessTokens();
        }, ['prefix' => 'api/oauth']);
    }
}
