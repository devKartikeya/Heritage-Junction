<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('package_inclusions', function (Blueprint $table) {
            $table->id();

            $table->foreignId('package_id')
                ->constrained()
                ->cascadeOnDelete();

            $table->string('inclusion');

            $table->unsignedTinyInteger('sort_order');

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('package_inclusions');
    }
};