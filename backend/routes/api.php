<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->group(static function () {
    Route::get('/profile', static function () {
        return Auth::user();
    })->name('profile');
});

Route::prefix('widgets')->name('widget.')->group(static function () {
    Route::get('/', 'WidgetController@index')->name('index');
    Route::get('/{widget}', 'WidgetController@show')->name('show');
});
