<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Destination;
use Inertia\Inertia;

class DestinationController extends Controller
{
    public function index()
    {
        $destinations = Destination::where('is_active', true)->get();

        return Inertia::render('Destinations/Index', [
            'destinations' => $destinations,
        ]);
    }

    public function show(string $slug)
    {
        $destination = Destination::where('slug', $slug)
            ->with(['heritageSites', 'foods'])
            ->firstOrFail();
        logger($destination);
        return Inertia::render('Destinations/Destination', [
            'destination' => $destination,
        ]);
    }
}