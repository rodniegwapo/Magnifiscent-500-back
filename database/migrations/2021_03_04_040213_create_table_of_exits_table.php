<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTableOfExitsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('table_of_exits', function (Blueprint $table) {
            $table->id();
            $table->nestedSet();
            $table->integer('table_level');
            $table->foreignId('position_1')->constrained('accounts');
            $table->foreignId('position_2')->nullable()->constrained('accounts');
            $table->foreignId('position_3')->nullable()->constrained('accounts');
            $table->foreignId('position_4')->nullable()->constrained('accounts');
            $table->foreignId('position_5')->nullable()->constrained('accounts');
            $table->foreignId('position_6')->nullable()->constrained('accounts');
            $table->foreignId('position_7')->nullable()->constrained('accounts');
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
        Schema::dropIfExists('table_of_exits');
    }
}
