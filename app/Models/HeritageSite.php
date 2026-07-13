<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class HeritageSite extends Model
{
    protected $table = 'heritage_sites';
    protected $fillable = [
        'destination_id',
        'name',
        'image_path',
        'description',
        'sort_order',
    ];

    public function destination(): BelongsTo
    {
        return $this->belongsTo(Destination::class);
    }
}
