<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\Booking;

class BookingTravelers extends Model
{
    use HasFactory;

    protected $fillable = [
        'booking_id',
        'traveler_name',
        'aadhar_path',
    ];

    public function booking()
    {
        return $this->belongsTo(Booking::class);
    }
}