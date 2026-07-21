<?php

use App\Http\Controllers\AdminDashboardController;
use App\Http\Controllers\BookingController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\DestinationController;
use App\Http\Controllers\PackageController;
use App\Http\Controllers\AdminBookingController;
use App\Http\Controllers\AdminCreatePackageController;
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
    Route::get(
        '/packages/{package}',
        [AdminPackageController::class, 'show']
    )->name('admin.packages.show');

    Route::put(
        '/packages/{package}',
        [AdminPackageController::class, 'update']
    )->name('admin.packages.update');

    Route::patch(
        '/packages/{package}/toggle-status',
        [AdminPackageController::class, 'toggleStatus']
    )->name('admin.packages.toggle-status');

    Route::post(
        '/packages/{package}/pricing',
        [AdminPackageController::class, 'storePricing']
    )->name('admin.pricing.store');

    Route::put(
        '/pricing/{pricing}',
        [AdminPackageController::class, 'updatePricing']
    )->name('admin.pricing.update');

    Route::delete(
        '/pricing/{pricing}',
        [AdminPackageController::class, 'destroyPricing']
    )->name('admin.pricing.destroy');

    Route::post(
        '/packages/{package}/itinerary',
        [AdminPackageController::class, 'storeItinerary']
    );

    Route::put(
        '/itinerary/{itinerary}',
        [AdminPackageController::class, 'updateItinerary']
    );

    Route::delete(
        '/itinerary/{itinerary}',
        [AdminPackageController::class, 'destroyItinerary']
    );

    Route::post(
        '/packages/{package}/duplicate',
        [AdminPackageController::class, 'duplicate']
    );

    Route::delete(
        '/packages/{package}',
        [AdminPackageController::class, 'destroy']
    );

    Route::put(
        '/packages/{package}/destinations',
        [AdminPackageController::class, 'updateDestinations']
    )->name('admin.packages.destinations');

    Route::get('/create-package', [AdminCreatePackageController::class, 'index']);

    Route::post('/packages', [AdminCreatePackageController::class, 'store'])
        ->name('admin.packages.store');
});

Route::fallback(function () {
    return Inertia::render('NotFound');
})->name("notfound");

require __DIR__ . '/settings.php';
