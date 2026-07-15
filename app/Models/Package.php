<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Package extends Model
{
    protected $fillable = [
        'title',
        'slug',
        'cover_image',
        'short_description',
        'full_description',
        'duration_days',
        'duration_nights',
        'starting_city',
        'ending_city',
        'starting_price',
        'is_active',
    ];

    public function destinations(): BelongsToMany
    {
        return $this->belongsToMany(Destination::class)
            ->withPivot('visit_order')
            ->orderByPivot('visit_order');
    }
    public function itineraries(): HasMany
    {
        return $this->hasMany(PackageItinerary::class)
            ->orderBy('day_number')
            ->orderBy('sort_order');
    }
    public function inclusions(): HasMany
    {
        return $this->hasMany(PackageInclusion::class)
            ->orderBy('sort_order');
    }
    public function exclusions(): HasMany
    {
        return $this->hasMany(PackageExclusion::class)
            ->orderBy('sort_order');
    }
    public function pricings(): HasMany
    {
        return $this->hasMany(PackagePricing::class)
            ->orderBy('sort_order');
    }
}