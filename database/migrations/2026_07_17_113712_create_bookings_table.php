<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('bookings', function (Blueprint $table) {
            $table->id();

            // Relations
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('package_id')->constrained()->onDelete('cascade');
            $table->foreignId('pricing_id')->nullable()->constrained('package_pricings')->onDelete('set null');

            // Contact details
            $table->string('full_name');
            $table->string('email');
            $table->string('phone');
            $table->string('additional_email')->nullable();
            $table->string('additional_phone')->nullable();
            $table->text('address')->nullable();

            // Travelers
            $table->integer('number_of_travelers');

            // Trip details
            $table->date('start_date');

            // Cost summary
            $table->decimal('per_person_cost', 10, 2)->nullable();
            $table->decimal('total_cost', 10, 2)->nullable();

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('bookings');
    }
};
