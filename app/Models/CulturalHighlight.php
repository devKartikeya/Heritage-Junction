<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CulturalHighlight extends Model
{
    protected $table = 'cultural_highlights';
    protected $fillable = [
        'destination_id',
        'title',
        'image_path',
        'description',
        'sort_order',
    ];

    public function destination(): BelongsTo
    {
        return $this->belongsTo(Destination::class);
    }
}