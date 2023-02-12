<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routesd
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::namespace('Api')->group(function () {
    // Guest
    Route::get('accounts/{account:code}', 'AccountController@show');
    Route::post('register', 'UserController@register');
    Route::get('password-reset/{token}', 'UserController@getPasswordReset');
    Route::post('reset-password', 'UserController@resetPassword');
    Route::post('update-password', 'UserController@updatePasswordViaReset');
    // Authorized
    Route::group(['middleware' => ['auth:api']], function () {
        Route::resource('announcements', 'AnnouncementController')->only(['index', 'show']);
        Route::post('log-out', 'UserController@logOut');
        Route::group(['prefix' => 'profile'], function () {
            Route::get('info', 'UserController@profile');
            Route::post('update-info', 'UserController@updateProfile');
            Route::post('update-password', 'UserController@updatePassword');
        });
        Route::resource('roles', 'RoleController')->only(['index', 'show']);
        // Admin
        Route::group([
            'as' => 'admin-',
            'middleware' => ['role:admin'],
            'namespace' => 'Admin',
            'prefix' => 'admin'
        ], function () {
            Route::resource('announcements', 'AnnouncementController')->only(['store', 'destroy']);
            Route::post('announcements/{announcement}', 'AnnouncementController@update')->name('announcements.update');
            Route::prefix('announcements/image')->group(function () {
                Route::post('add-image', 'AnnouncementController@addImage')->name('announcements.add-image');
                Route::post('remove-image', 'AnnouncementController@removeImage')->name('announcements.remove-image');
            });
            Route::resource('accounts', 'AccountController')->only(['index', 'show']);
            Route::get('accounts-summary', 'AccountSummaryController@index')->name('accounts-summary.index');
            Route::get('encashments/users', 'EncashmentController@users')->name('encashments.users');
            Route::put('encashments/mark-as-paid/{user}', 'EncashmentController@markAsPaid')->name('encashments.mark-as-paid');
            Route::get('dashboard', 'DashboardController@index')->name('dashboard.index');
            Route::post('encryption/package-codes', 'EncryptionController@packageCodes')->name('encryption.package-codes');
            Route::resource('logs', 'LogController')->only(['index', 'show']);
            Route::get('monthly-reports', 'MonthlyReportController@index')->name('monthly-reports.index');
            Route::resource('package-codes', 'PackageCodeController')->only(['index', 'store', 'show']);
            Route::get('table-of-exits', 'TableOfExitController@show')->name('table-of-exits.show');
            Route::resource('tickets', 'TicketController')->except(['create', 'edit', 'store']);
            Route::resource('transactions', 'TransactionController')->only(['index', 'show', 'destroy']);
            Route::put('transactions/approve-encashment/{transaction}', 'TransactionController@approveEncashment');
            Route::resource('users', 'UserController')->except(['create', 'edit', 'update']);
            Route::post('users/{id}', 'UserController@update')->name('users.update');
            Route::post('users/{id}/restore', 'UserController@restore')->name('users.restore');
            Route::post('users/password/update', 'UserController@updatePassword')->name('users.update-password');
            Route::get('users-monthly-qualifiers', 'UserController@monthlyQualifiers')->name('users.monthly-qualifiers');
            Route::get('users-top-distributors', 'UserController@topDistributors')->name('users.top-distributors');
        });
        // Seller
        Route::group([
            'as' => 'seller-',
            'middleware' => ['role:seller'],
            'namespace' => 'Seller',
            'prefix' => 'seller'
        ], function () {
            Route::get('dashboard', 'DashboardController@index')->name('dashboard.index');
            Route::post('encryption/package-codes', 'EncryptionController@packageCodes')->name('encryption.package-codes');
            Route::resource('package-codes', 'PackageCodeController')->only(['index', 'show']);
        });
        // User
        Route::group([
            'as' => 'user-',
            'middleware' => 'role:user',
            'namespace' => 'User',
            'prefix' => 'user'
        ], function () {
            Route::resource('accounts', 'AccountController')->only(['index', 'store', 'show']);
            Route::get('accounts-summary', 'AccountSummaryController@index')->name('accounts-summary.index');
            Route::get('dashboard/{account?}', 'DashboardController@index')->name('dashboard.index');
            Route::get('notifications', 'NotificationController@index')->name('notifications.index');
            Route::post('notifications/read', 'NotificationController@read')->name('notifications.read');
            Route::get('table-of-exits', 'TableOfExitController@show')->name('table-of-exits.show');
            Route::resource('tickets', 'TicketController')->except(['create', 'edit', 'update']);
            Route::post('tickets/{ticket}', 'TicketController@update')->name('tickets.update');
            Route::resource('transactions', 'TransactionController')->only(['index', 'show']);
            Route::post('transactions/encashment', 'TransactionController@encashment');
        });
    });
});
