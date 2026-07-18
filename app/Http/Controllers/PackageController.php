<?php

namespace App\Http\Controllers;

use App\Models\Faq;
use App\Models\Package;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PackageController extends Controller
{
    public function index()
    {
        $packages = Package::where('is_active', true)->get();
        return Inertia::render("Packages/Index", ['packages' => $packages]);
    }
    public function show(string $slug)
    {
        $pkg = Package::where('slug', $slug)
            ->with([
                'destinations.heritageSites',
                'itineraries',
                'inclusions',
                'exclusions',
                'pricings'
            ])
            ->firstOrFail();

        $booking_faqs = Faq::where('category', "Booking")->get();
        $packages_faqs = Faq::where('category', "Packages")->get();

        return Inertia::render('Packages/Package', [
            'pkg' => $pkg,
            'booking_faqs' => $booking_faqs,
            'packages_faqs' => $packages_faqs,
        ]);
    }
}
