<?php

use App\Http\Controllers\BookingController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\DestinationController;
use App\Http\Controllers\PackageController;

Route::inertia('/', 'welcome')->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

Route::inertia("/about", 'About')->name("about");

Route::inertia("/services", 'Services')->name("services");

Route::get('/destinations', [DestinationController::class, 'index']);

Route::get('/destinations/{slug}', [DestinationController::class, 'show'])->name('destinations.show');

Route::get("/packages", [PackageController::class, "index"]);
Route::get('/packages/{slug}', [PackageController::class, 'show'])->name('packages.show');

Route::get("/booking/{id}", [BookingController::class, 'index'])->middleware(['auth']);

Route::fallback(function () {
    return Inertia::render('NotFound');
})->name("notfound");

require __DIR__ . '/settings.php';
