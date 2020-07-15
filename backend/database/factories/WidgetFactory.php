<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Widget;
use Faker\Generator as Faker;

$factory->define(Widget::class, static function (Faker $faker) {
    $name = $faker->city;

    return [
        'name' => $name,
        'description' => $faker->paragraph,
        'card_image' => 'not-found.jpg',
        'created_at' => new \DateTime(),
        'updated_at' => new \DateTime(),
    ];
});
