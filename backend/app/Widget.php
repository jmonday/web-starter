<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Widget extends Model
{
    protected $casts = [
        'created_at' => 'datetime',
        'deleted_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    protected $visible = [
        'card_image',
        'country_code',
        'description',
        'id',
        'name',
    ];

    public static function boot(): void
    {
        parent::boot();

        static::saving(static function ($widget) {
            $widget->slug = Str::slug($widget->name);
        });
    }

    public function getRouteKeyName(): string
    {
        return 'slug';
    }
}
