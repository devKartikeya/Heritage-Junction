<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('booking_travelers', function (Blueprint $table) {
            $table->id();

            // Link to booking
            $table->foreignId('booking_id')->constrained()->onDelete('cascade');

            // Traveler details
            $table->string('traveler_name');
            $table->string('aadhar_path'); // store file path (image/pdf upload)

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('booking_travelers');
    }
};