<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Destination;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use App\Models\Package;
use App\Models\PackagePricing;
use App\Models\PackageItinerary;
use App\Models\PackageInclusion;
use App\Models\PackageExclusion;
use Illuminate\Http\Request;

class AdminCreatePackageController extends Controller
{
    public function index()
    {
        return Inertia::render(
            'Admin/Packages/Create',
            [
                'destinations' => Destination::orderBy('name')->get(),
            ]
        );
    }
    public function store(Request $request)
    {
        $validated = $request->validate([

            'title' => 'required|string|max:255',
            'slug' => 'required|unique:packages,slug',
            'cover_image' => 'required',
            'short_description' => 'required',
            'full_description' => 'required',
            'duration_days' => 'required|integer',
            'duration_nights' => 'required|integer',
            'starting_city' => 'required',
            'ending_city' => 'required',
            'start_lat' => 'required',
            'start_lng' => 'required',
            'end_lat' => 'required',
            'end_lng' => 'required',
            'destinations' => 'required|array',
            'pricings' => 'required|array',
            'itineraries' => 'required|array',
            'inclusions' => 'required|array',
            'exclusions' => 'required|array',

        ]);
        DB::transaction(function () use ($validated) {
            $package = Package::create([

                'title' => $validated['title'],
                'slug' => Str::slug($validated['slug']),
                'cover_image' => $validated['cover_image'],
                'short_description' => $validated['short_description'],
                'full_description' => $validated['full_description'],
                'duration_days' => $validated['duration_days'],
                'duration_nights' => $validated['duration_nights'],
                'starting_price' =>
                collect($validated['pricings'])->min('per_person_cost'),
                'starting_city' => $validated['starting_city'],
                'ending_city' => $validated['ending_city'],
                'start_lat' => $validated['start_lat'],
                'start_lng' => $validated['start_lng'],
                'end_lat' => $validated['end_lat'],
                'end_lng' => $validated['end_lng'],
                'is_active' => true,

            ]);
            foreach ($validated['destinations'] as $index => $destination) {

                $package->destinations()->attach(
                    $destination,

                    [
                        'visit_order' => $index + 1
                    ]
                );
            }
            foreach ($validated['pricings'] as $pricing) {

                $package->pricings()->create($pricing);
            }
            foreach ($validated['itineraries'] as $item) {

                $package->itineraries()->create($item);
            }
            foreach ($validated['inclusions'] as $item) {

                $package->inclusions()->create($item);
            }
            foreach ($validated['exclusions'] as $item) {

                $package->exclusions()->create($item);
            }
            return redirect()
                ->route('admin.packages.show', $package)
                ->with(
                    'success',
                    'Package created successfully.'
                );
        });
    }
}