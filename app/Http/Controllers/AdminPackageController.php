<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Package;
use Inertia\Inertia;
use App\Models\PackagePricing;
use App\Models\Destination;
use App\Models\PackageItinerary;

class AdminPackageController extends Controller
{
    public function index()
    {
        $packages = Package::with([
            'destinations',
            'pricings'
        ])->get();

        return Inertia::render(
            'Admin/Packages/Index',
            [
                'packages' => $packages
            ]
        );
    }
    public function show(Package $package)
    {
        $package->load([
            'pricings',
            'itineraries' => function ($query) {
                $query
                    ->orderBy('day_number')
                    ->orderBy('sort_order')
                    ->orderBy('time');
            },
            'destinations.heritageSites',
            'destinations.foods'
        ]);

        return Inertia::render(
            'Admin/Packages/Package',
            [
                'package' => $package,
                'allDestinations' => Destination::orderBy('name')->get()
            ]
        );
    }

    public function update(Request $request, Package $package)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'required|string|max:255|unique:packages,slug,' . $package->id,
            'short_description' => 'string',
            'full_description' => 'string',
            'duration_days' => 'required|integer|min:1',
        ]);

        $package->update($validated);

        return back()->with(
            'success',
            'Package updated successfully.'
        );
    }

    public function storePricing(Request $request, Package $package)
    {
        $validated = $request->validate([
            'vehicle_name' => 'required|string|max:255',
            'total_cost' => 'required|numeric|min:0',
            'per_person_cost' => 'required|numeric|min:0',
            'minimum_persons' => 'required|integer|min:1',
            'sort_order' => 'required|integer|min:1',
        ]);

        $validated['package_id'] = $package->id;

        PackagePricing::create($validated);

        return back()->with(
            'success',
            'Pricing added successfully.'
        );
    }

    public function updatePricing(
        Request $request,
        PackagePricing $pricing
    ) {
        $validated = $request->validate([
            'vehicle_name' => 'required|string|max:255',
            'total_cost' => 'required|numeric|min:0',
            'per_person_cost' => 'required|numeric|min:0',
            'minimum_persons' => 'required|integer|min:1',
            'sort_order' => 'required|integer|min:1',
        ]);

        $pricing->update($validated);

        return back()->with(
            'success',
            'Pricing updated successfully.'
        );
    }

    public function destroyPricing(
        PackagePricing $pricing
    ) {
        $pricing->delete();

        return back()->with(
            'success',
            'Pricing deleted successfully.'
        );
    }

    public function storeItinerary(Request $request, Package $package)
    {
        $validated = $request->validate([
            'day_number' => 'required|integer|min:1',
            'sort_order' => 'required|integer|min:1',
            'time' => 'nullable',
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
        ]);
        $validated['package_id'] = $package->id;

        PackageItinerary::create($validated);

        return back()->with('success', 'Activity added.');
    }

    public function updateItinerary(
        Request $request,
        PackageItinerary $itinerary
    ) {
        $validated = $request->validate([
            'day_number' => 'required|integer|min:1',
            'sort_order' => 'required|integer|min:1',
            'time' => 'nullable',
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
        ]);

        $itinerary->update($validated);

        return back()->with('success', 'Activity updated.');
    }

    public function destroyItinerary(
        PackageItinerary $itinerary
    ) {
        $itinerary->delete();

        return back()->with('success', 'Activity deleted.');
    }

    public function toggleStatus(Package $package)
    {
        $package->update([
            'is_active' => !$package->is_active,
        ]);

        return back()->with(
            'success',
            $package->is_active
                ? 'Package activated successfully.'
                : 'Package deactivated successfully.'
        );
    }

    public function duplicate(Package $package)
    {
        $newPackage = $package->replicate();

        $newPackage->title .= ' (Copy)';
        $newPackage->slug .= '-copy-' . time();
        $newPackage->save();

        // Pricings
        foreach ($package->pricings as $pricing) {
            $new = $pricing->replicate();
            $new->package_id = $newPackage->id;
            $new->save();
        }

        // Itinerary
        foreach ($package->itineraries as $item) {
            $new = $item->replicate();
            $new->package_id = $newPackage->id;
            $new->save();
        }

        // Destination Pivot
        $newPackage->destinations()->attach(
            $package->destinations->pluck('id')
        );

        return back()->with(
            'success',
            'Package duplicated successfully.'
        );
    }

    public function destroy(Package $package)
    {
        $package->pricings()->delete();

        $package->itineraries()->delete();

        $package->destinations()->detach();

        $package->delete();

        return redirect()
            ->route('admin.packages.index')
            ->with(
                'success',
                'Package deleted successfully.'
            );
    }

    public function updateDestinations(
        Request $request,
        Package $package
    ) {

        $validated = $request->validate([
            'destinations' => 'required|array',
            'destinations.*' => 'exists:destinations,id',
        ]);

        /*
    Sync handles:
    ✔ Add newly checked destinations
    ✔ Remove unchecked destinations
    ✔ Keep existing ones
    */

        $syncData = [];

        foreach ($validated['destinations'] as $index => $destinationId) {

            $syncData[$destinationId] = [
                'visit_order' => $index + 1,
            ];
        }

        $package->destinations()->sync($syncData);

        return back()->with(
            'success',
            'Destinations updated successfully.'
        );
    }
}
