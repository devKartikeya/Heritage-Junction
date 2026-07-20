<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\BookingTravelers;

class Booking extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'package_id',
        'pricing_id',
        'full_name',
        'email',
        'phone',
        'additional_email',
        'additional_phone',
        'address',
        'status',
        'number_of_travelers',
        'start_date',
        'per_person_cost',
        'total_cost',
    ];

    // Relationships
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function package()
    {
        return $this->belongsTo(Package::class);
    }

    public function pricing()
    {
        return $this->belongsTo(PackagePricing::class);
    }

    public function travelers()
    {
        return $this->hasMany(BookingTravelers::class);
    }
}