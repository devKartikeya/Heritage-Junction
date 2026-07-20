<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Package;
use Inertia\Inertia;

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
}
