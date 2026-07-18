<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $bookings = auth()->user()
            ->bookings()
            ->with('package')
            ->latest()
            ->get();

        return Inertia::render('dashboard', [
            'bookings' => $bookings,
        ]);
    }
}