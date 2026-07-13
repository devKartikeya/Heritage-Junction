<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PackageItinerary extends Model
{
    protected $fillable = [
        'package_id',
        'day_number',
        'time',
        'title',
        'description',
        'sort_order',
    ];
    
    public function package(): BelongsTo
    {
        return $this->belongsTo(Package::class);
    }
}
