<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Destination extends Model
{
    protected $fillable = [
        'name',
        'slug',
        'description',
        'hero_image',
        'state',
        'category',
        'best_time',
        'average_budget',
        'is_active',
    ];

    public function images(): HasMany
    {
        return $this->hasMany(DestinationImage::class)
            ->orderBy('sort_order');
    }
    public function foods(): HasMany
    {
        return $this->hasMany(Food::class)
            ->orderBy('sort_order');
    }
    public function heritageSites(): HasMany
    {
        return $this->hasMany(HeritageSite::class)
            ->orderBy('sort_order');
    }
    public function culturalHighlights(): HasMany
    {
        return $this->hasMany(CulturalHighlight::class)
            ->orderBy('sort_order');
    }

    public function packages(): BelongsToMany
    {
        return $this->belongsToMany(Package::class)
            ->withPivot('visit_order')
            ->orderByPivot('visit_order');
    }
}
