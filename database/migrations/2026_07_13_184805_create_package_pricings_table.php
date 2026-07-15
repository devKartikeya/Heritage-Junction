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
        Schema::create('package_pricings', function (Blueprint $table) {
            $table->id();

            $table->foreignId('package_id')
                ->constrained()
                ->cascadeOnDelete();

            $table->string('vehicle_name');

            $table->decimal('total_cost', 10, 2);

            $table->decimal('per_person_cost', 10, 2);

            $table->unsignedInteger('minimum_persons');

            $table->unsignedTinyInteger('sort_order');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('package_pricings');
    }
};