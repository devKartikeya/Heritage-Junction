<?php

namespace App\Http\Controllers;

use App\Models\Destination;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Food;

class AdminDestinationController extends Controller
{
    /**
     * Display all destinations.
     */
    public function index()
    {
        $destinations = Destination::withCount([
            'heritageSites',
            'foods',
        ])
            ->latest()
            ->get();

        return Inertia::render('Admin/Destination/Index', [
            'destinations' => $destinations,
        ]);
    }


    /**
     * Display a single destination with its
     * heritage sites and foods.
     */
    public function show(Destination $destination)
    {
        $destination->load([
            'heritageSites',
            'foods',
        ]);

        return Inertia::render('Admin/Destination/Destination', [
            'destination' => $destination,
        ]);
    }


    public function create(Request $request)
    {
        return Inertia::render('Admin/Destination/Create');
    }

    /**
     * Store a new destination.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'slug' => 'required|string|max:255|unique:destinations,slug',
            'short_description' => 'required|string',
            'hero_image' => 'nullable|string|max:2048',
            'state' => 'required|string|max:255',
            'category' => 'required|string|max:255',
            'best_time' => 'nullable|string|max:255',
            'average_budget' => 'nullable|numeric|min:0',
            'is_active' => 'boolean',
            'full_description' => 'nullable|string',
            'banner_image' => 'nullable|string|max:2048',
            'lat' => 'nullable|numeric',
            'lng' => 'nullable|numeric',
        ]);

        Destination::create($validated);

        return redirect()
            ->route('admin.destinations.index')
            ->with('success', 'Destination created successfully.');
    }


    public function edit(Destination $destination)
    {
        $destination->load(['heritageSites', 'foods']);
        return Inertia::render('Admin/Destination/Edit', [
            'destination' => $destination,
        ]);
    }

    /**
     * Update an existing destination.
     */
    public function update(Request $request, Destination $destination)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',

            'slug' => 'required|string|max:255|unique:destinations,slug,' . $destination->id,

            'short_description' => 'required|string',

            'hero_image' => 'nullable|string|max:2048',

            'state' => 'required|string|max:255',

            'category' => 'required|string|max:255',

            'best_time' => 'nullable|string|max:255',

            'average_budget' => 'nullable|numeric|min:0',

            'is_active' => 'boolean',

            'full_description' => 'nullable|string',

            'banner_image' => 'nullable|string|max:2048',

            'lat' => 'nullable|numeric',

            'lng' => 'nullable|numeric',
        ]);

        $destination->update($validated);

        return back()->with(
            'success',
            'Destination updated successfully.'
        );
    }


    /**
     * Toggle destination active/inactive status.
     */
    public function toggleStatus(Destination $destination)
    {
        $destination->update([
            'is_active' => !$destination->is_active,
        ]);

        return back()->with(
            'success',
            'Destination status updated successfully.'
        );
    }


    /**
     * Delete destination.
     */
    public function destroy(Destination $destination)
    {
        $destination->delete();

        return redirect()
            ->route('admin.destinations.index')
            ->with(
                'success',
                'Destination deleted successfully.'
            );
    }

    public function storeHeritageSite(Request $request, Destination $destination)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'image_path' => 'required|url|max:2048',
            'description' => 'nullable|string',
            'sort_order' => 'required|integer|min:0',
        ]);

        $destination->heritageSites()->create($validated);

        return back()->with(
            'success',
            'Heritage site added successfully.'
        );
    }

    public function storeFood(Request $request, Destination $destination)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'image_path' => 'nullable|string',
            'sort_order' => 'required|integer|min:0',
        ]);

        $destination->foods()->create([
            'name' => $validated['name'],
            'description' => $validated['description'] ?? null,
            'sort_order' => $validated['sort_order'],
        ]);

        return back()->with(
            'success',
            'Food added successfully.'
        );
    }
    public function destroyFood(Food $food)
    {
        $food->delete();

        return back()->with(
            'success',
            'Food deleted successfully.'
        );
    }
}
