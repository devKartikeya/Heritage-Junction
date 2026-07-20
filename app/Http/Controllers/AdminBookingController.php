<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\PackagePricing;

class AdminBookingController extends Controller
{
    public function index()
    {
        $bookings = Booking::with([
            'package',
            'pricing',
            'user',
        ])
            ->latest()
            ->get();

        return Inertia::render('Admin/Bookings/Index', [
            'bookings' => $bookings,
        ]);
    }

    public function show(Booking $booking)
    {
        $booking->load([
            'package',
            'pricing',
            'user',
            'travelers',
        ]);

        $pricings = PackagePricing::where(
            'package_id',
            $booking->package_id
        )->get();

        return Inertia::render('Admin/Bookings/Booking', [
            'booking' => $booking,
            'pricings' => $pricings,
        ]);
    }

    public function update(Request $request, Booking $booking)
    {
        $validated = $request->validate([
            'full_name' => 'required|string|max:255',
            'email' => 'required|email',
            'phone' => 'required|string|max:20',
            'additional_email' => 'nullable|email',
            'additional_phone' => 'nullable|string|max:20',
            'address' => 'nullable|string',
            'start_date' => 'required|date',
            'status' => 'required|string',
            'pricing_id' => 'nullable|exists:package_pricings,id',
        ]);

        // If vehicle changed
        if ($validated['pricing_id']) {

            $pricing = PackagePricing::findOrFail($validated['pricing_id']);

            $validated['per_person_cost'] = $pricing->per_person_cost;

            $validated['total_cost'] =
                $pricing->per_person_cost * $booking->number_of_travelers;
        }

        $booking->update($validated);

        return back()->with('success', 'Booking updated successfully.');
    }

    public function confirm(Booking $booking)
    {
        $booking->update([
            'status' => 'Confirmed'
        ]);

        return back()->with('success', 'Booking confirmed.');
    }

    public function paid(Booking $booking)
    {
        $booking->update([
            'status' => 'Paid'
        ]);

        return back()->with('success', 'Payment marked successfully.');
    }

    public function complete(Booking $booking)
    {
        $booking->update([
            'status' => 'Completed'
        ]);

        return back()->with('success', 'Booking completed.');
    }

    public function cancel(Booking $booking)
    {
        $booking->update([
            'status' => 'Cancelled'
        ]);

        return back()->with('success', 'Booking cancelled.');
    }

    public function destroy(Booking $booking)
    {
        $booking->delete();

        return redirect()
            ->route('admin.bookings.index')
            ->with('success', 'Booking deleted.');
    }
}
