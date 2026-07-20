<?php

use App\Http\Controllers\AdminDashboardController;
use App\Http\Controllers\BookingController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\DestinationController;
use App\Http\Controllers\PackageController;
use App\Http\Controllers\AdminBookingController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\AdminTravelerController;
use App\Http\Controllers\AdminPackageController;

Route::inertia('/', 'welcome')->name('home');

Route::get('/dashboard', [DashboardController::class, 'index'])
    ->middleware(['auth', 'verified'])
    ->name('dashboard');

Route::inertia("/about", 'About')->name("about");

Route::inertia("/services", 'Services')->name("services");


Route::get('/destinations', [DestinationController::class, 'index']);
Route::get('/destinations/{slug}', [DestinationController::class, 'show'])->name('destinations.show');


Route::get("/packages", [PackageController::class, "index"]);
Route::get('/packages/{slug}', [PackageController::class, 'show'])->name('packages.show');


Route::get("/booking/{id}", [BookingController::class, 'index'])->middleware(['auth']);
Route::post('/booking', [BookingController::class, 'store'])->name('booking.store');

Route::patch('/bookings/{booking}/cancel', [BookingController::class, 'cancel'])
    ->middleware('auth')
    ->name('bookings.cancel');


Route::prefix('admin')->group(function () {
    Route::get('/dashboard', [AdminDashboardController::class, 'index']);
    Route::get('/bookings', [AdminBookingController::class, 'index'])
        ->name('admin.bookings.index');

    Route::get('/bookings/{booking}', [AdminBookingController::class, 'show'])
        ->name('admin.bookings.show');
    Route::put('/bookings/{booking}', [AdminBookingController::class, 'update'])
        ->name('admin.bookings.update');

    Route::patch('/bookings/{booking}/confirm', [AdminBookingController::class, 'confirm'])
        ->name('admin.bookings.confirm');

    Route::patch('/bookings/{booking}/paid', [AdminBookingController::class, 'paid'])
        ->name('admin.bookings.paid');

    Route::patch('/bookings/{booking}/complete', [AdminBookingController::class, 'complete'])
        ->name('admin.bookings.complete');

    Route::patch('/bookings/{booking}/cancel', [AdminBookingController::class, 'cancel'])
        ->name('admin.bookings.cancel');

    Route::delete('/bookings/{booking}', [AdminBookingController::class, 'destroy'])
        ->name('admin.bookings.destroy');

    Route::patch(
        '/travelers/{traveler}/verify',
        [AdminTravelerController::class, 'verify']
    );
    Route::patch(
        '/travelers/{traveler}/reject',
        [AdminTravelerController::class, 'reject']
    );


    Route::get(
        '/packages',
        [AdminPackageController::class, 'index']
    )->name('admin.packages.index');
});

Route::fallback(function () {
    return Inertia::render('NotFound');
})->name("notfound");

require __DIR__ . '/settings.php';
