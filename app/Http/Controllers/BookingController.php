<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use App\Models\Package;
use Illuminate\Http\Request;
use App\Models\PackagePricing;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class BookingController extends Controller
{
    public function index($id)
    {
        $user = Auth::user();
        $pricings = PackagePricing::where('package_id', $id)->get();
        $pkg = Package::find($id)->title;

        return Inertia::render('Booking/Booking', [
            'user' => [
                'name' => $user->name,
                'email' => $user->email,
            ],
            'packageId' => $id,
            'pricings' => $pricings, // send to frontend
            'pkg' => $pkg, // send to frontend
        ]);
    }
    public function store(Request $request)
    {
        // dd($request->all());
        // Validate incoming data
        $validated = $request->validate([
            'packageTitle' => 'required|string',
            'packageID' => 'required|exists:packages,id',
            'name' => 'required|string',
            'email' => 'required|email',
            'phone' => 'required|string',
            'additionalEmail' => 'nullable|email',
            'additionalPhone' => 'nullable|string',
            'address' => 'nullable|string',
            'travelers' => 'required|array|min:1',
            'transport' => 'required',
            'startDate' => 'required|date',
        ]);

        // If transport option selected, calculate costs
        if ($request->transport) {
            $pricing = PackagePricing::find($request->transport);
            $validated['pricing_id'] = $pricing->id;
            $validated['per_person_cost'] = $pricing->per_person_cost;
            $validated['total_cost'] = $pricing->per_person_cost * count($validated['travelers']);
        }

        // Add user_id from auth
        // $validated['user_id'] = auth()->id();
        $validated['package_id'] = $request->packageID;

        // Insert into bookings table
        $booking = Booking::create([
            'user_id' => auth()->id(),
            'package_id' => $validated['package_id'],
            'pricing_id' => $validated['pricing_id'] ?? null,
            'full_name' => $validated['name'],
            'email' => $validated['email'],
            'phone' => $validated['phone'],
            'additional_email' => $validated['additionalEmail'] ?? null,
            'additional_phone' => $validated['additionalPhone'] ?? null,
            'address' => $validated['address'] ?? null,
            'number_of_travelers' => count($validated['travelers']),
            'start_date' => $validated['startDate'],
            'per_person_cost' => $validated['per_person_cost'] ?? null,
            'total_cost' => $validated['total_cost'] ?? null,
        ]);

        foreach ($validated['travelers'] as $traveler) {
            $path = $traveler['aadhar']->store('aadhar', 'public');
            $booking->travelers()->create([
                'traveler_name' => $traveler['name'],
                'aadhar_path' => $path,
            ]);
        }

        // if ($user) Log::info("All set", $user);
        // else Log::info("Noop", $user);

        return redirect()->back()->with('success', 'Thank you! We will contact you within 15–20 minutes.');
    }

    public function cancel(Booking $booking)
    {
        abort_if($booking->user_id !== auth()->id(), 403);

        $booking->update([
            'status' => 'Cancelled',
        ]);

        return back()->with('success', 'Booking cancelled successfully.');
    }
}
