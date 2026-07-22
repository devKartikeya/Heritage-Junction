<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;

class AdminUsersController extends Controller
{
    public function index()
    {
        $users = User::withCount('bookings')
            ->withSum('bookings', 'total_cost')
            ->latest()
            ->get();

        return Inertia::render(
            'Admin/Users/Index',
            [
                'users' => $users,

                'stats' => [

                    'total' => User::count(),

                    'today' => User::whereDate(
                        'created_at',
                        today()
                    )->count(),

                    'active' => User::where(
                        'status',
                        'active'
                    )->count(),

                    'blocked' => User::where(
                        'status',
                        'blocked'
                    )->count(),

                ],

            ]
        );
    }
    public function show(User $user)
    {
        $user->load([
            'bookings.package',
        ]);

        return Inertia::render(
            'Admin/Users/User',
            [
                'user' => $user,
            ]
        );
    }
    public function toggle(User $user)
    {
        $user->update([

            'status' =>

            $user->status == 'active'

                ? 'blocked'

                : 'active'

        ]);

        return back()->with(
            'success',
            'User status updated successfully.'
        );
    }
}
