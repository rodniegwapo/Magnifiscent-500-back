<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePackageCodesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('package_codes', function (Blueprint $table) {
            $table->id();
            $table->foreignId('account_id')->nullable()->constrained();
            $table->foreignId('seller_id')->constrained('users');
            $table->string('code', 50)->unique();
            $table->datetime('claimed_at')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('package_codes');
    }
}
