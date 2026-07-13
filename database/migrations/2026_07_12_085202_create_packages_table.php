<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('packages', function (Blueprint $table) {
            $table->id();

            $table->string('title');
            $table->string('slug')->unique();

            $table->string('cover_image');

            $table->text('short_description');
            $table->longText('full_description');

            $table->unsignedTinyInteger('duration_days');
            $table->unsignedTinyInteger('duration_nights');

            $table->string('starting_city');
            $table->string('ending_city');

            $table->decimal('starting_price', 10, 2);

            $table->boolean('is_active')->default(true);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('packages');
    }
};