<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminAuthController extends Controller
{
    public function index()
    {
        return inertia('Admin/Auth/Login');
    }

    public function login(Request $request)
    {
        $credentials = $request->validate([

            'username' => ['required'],

            'password' => ['required'],

        ]);

        if (
            Auth::guard('admin')->attempt(
                $credentials,
                $request->boolean('remember')
            )
        ) {

            $request->session()->regenerate();

            if (!Auth::guard('admin')->user()->is_active) {

                Auth::guard('admin')->logout();

                return back()->withErrors([

                    'username' => 'This administrator account has been disabled.'

                ]);
            }

            return redirect()->intended('/admin/dashboard');
        }

        return back()->withErrors([

            'username' => 'Invalid username or password.'

        ]);
    }

    public function logout(Request $request)
    {
        Auth::guard('admin')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/admin/login');
    }
}