<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Models\Booking;
use App\Models\Package;
use App\Models\User;
use App\Models\Destination;

class AdminDashboardController extends Controller
{
    public function index()
    {
        $stats = [
            'bookings' => Booking::count(),
            'packages' => Package::count(),
            'destinations' => Destination::count(),
            'users' => User::count(),
        ];

        $recentBookings = Booking::with(['user', 'package'])
            ->latest()
            ->take(5)
            ->get();

        return Inertia::render('Admin/Dashboard', [
            'stats' => $stats,
            'recentBookings' => $recentBookings,
        ]);
    }
}