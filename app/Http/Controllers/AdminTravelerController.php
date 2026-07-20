<?php

namespace App\Http\Controllers;

use App\Models\BookingTravelers;

class AdminTravelerController extends Controller
{
    public function verify(BookingTravelers $traveler)b
    {
        $traveler->update([
            'verification_status' => 'verified'
        ]);

        return back()->with(
            'success',
            'Traveler verified successfully.'
        );
    }

    public function reject(BookingTravelers $traveler)
    {
        $traveler->update([
            'verification_status' => 'rejected'
        ]);

        return back()->with(
            'success',
            'Traveler rejected.'
        );
    }
}