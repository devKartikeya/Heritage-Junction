<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PackagePricing extends Model
{
    protected $fillable = [
        'package_id',
        'vehicle_name',
        'total_cost',
        'per_person_cost',
        'minimum_persons',
        'sort_order',
    ];

    public function package(): BelongsTo
    {
        return $this->belongsTo(Package::class);
    }
}