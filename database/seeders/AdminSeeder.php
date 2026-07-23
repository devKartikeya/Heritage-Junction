<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Admin;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */

    public function run(): void
    {
        Admin::create([

            'name' => 'Kartikeya Mishra',

            'username' => 'devKartikeya',

            'email' => 'kartikeya2122008@gmail.com',

            'password' => 'devMishra7',

            'role' => 'super_admin',

        ]);
    }
}
