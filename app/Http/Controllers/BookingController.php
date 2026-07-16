<?php

namespace App\Http\Controllers;

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
}
