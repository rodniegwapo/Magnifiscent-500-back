<?php

namespace App\Providers;

use Illuminate\Database\Eloquent\Relations\Relation;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        // Model Instances
        $this->app->bind('Account', function ($app) {
            return new \App\Models\Account;
        });
        $this->app->bind('Announcement', function ($app) {
            return new \App\Models\Announcement;
        });
        $this->app->bind('Log', function ($app) {
            return new \App\Models\Log;
        });
        $this->app->bind('MonthlyReport', function ($app) {
            return new \App\Models\MonthlyReport;
        });
        $this->app->bind('Notification', function ($app) {
            return new \App\Models\Notification;
        });
        $this->app->bind('PackageCode', function ($app) {
            return new \App\Models\PackageCode;
        });
        $this->app->bind('PasswordReset', function ($app) {
            return new \App\Models\PasswordReset;
        });
        $this->app->bind('Role', function ($app) {
            return new \App\Models\Role;
        });
        $this->app->bind('TableOfExit', function ($app) {
            return new \App\Models\TableOfExit;
        });
        $this->app->bind('Ticket', function ($app) {
            return new \App\Models\Ticket;
        });
        $this->app->bind('Transaction', function ($app) {
            return new \App\Models\Transaction;
        });
        $this->app->bind('User', function ($app) {
            return new \App\Models\User;
        });
        $this->app->bind('Wallet', function ($app) {
            return new \App\Models\Wallet;
        });
        // Service Instances
        $this->app->bind('AccountService', function ($app) {
            return new \App\Services\AccountService;
        });
        $this->app->bind('AnnouncementService', function ($app) {
            return new \App\Services\AnnouncementService;
        });
        $this->app->bind('EncashmentService', function ($app) {
            return new \App\Services\EncashmentService;
        });
        $this->app->bind('LogService', function ($app) {
            return new \App\Services\LogService;
        });
        $this->app->bind('MonthlyReportService', function ($app) {
            return new \App\Services\MonthlyReportService;
        });
        $this->app->bind('NotificationService', function ($app) {
            return new \App\Services\NotificationService;
        });
        $this->app->bind('PackageCodeService', function ($app) {
            return new \App\Services\PackageCodeService;
        });
        $this->app->bind('TableOfExitService', function ($app) {
            return new \App\Services\TableOfExitService;
        });
        $this->app->bind('TicketService', function ($app) {
            return new \App\Services\TicketService;
        });
        $this->app->bind('TransactionService', function ($app) {
            return new \App\Services\TransactionService;
        });
        $this->app->bind('UserService', function ($app) {
            return new \App\Services\UserService;
        });
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Relation::morphMap([
            'account' => 'App\Models\Account',
            'package_code' => 'App\Models\PackageCode',
            'ticket' => 'App\Models\Ticket',
            'user' => 'App\Models\User'
        ]);
    }
}
