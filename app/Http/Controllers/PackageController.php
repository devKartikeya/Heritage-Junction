<?php

namespace App\Http\Controllers;

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
                'destinations',
                'itineraries',
                'inclusions',
                'exclusions',
            ])
            ->firstOrFail();

        return Inertia::render('Packages/Package', [
            'pkg' => $pkg,
        ]);
    }
}
