<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\User;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(User::class, static function (Faker $faker) {
    $createdAt = date('Y-m-d H:i:s', random_int(
        strtotime('2019-01-01 00:00:00'),
        strtotime(now())
    ));

    $lastLogin = date('Y-m-d H:i:s', random_int(
        strtotime($createdAt),
        strtotime(now())
    ));

    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'email_verified_at' => now(),
        'password' => Hash::make('Password01!'),
        'remember_token' => Str::random(10),
        'is_admin' => false,
        'created_at' => $createdAt,
        'last_login_at' => $lastLogin,
    ];
});
