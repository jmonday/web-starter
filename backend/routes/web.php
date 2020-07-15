<?php

use App\Jobs\DummyJob;
use App\Mail\DummyMail;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;

Auth::routes();

Route::get('/jobs/{count}', static function ($count) {
    for ($i = 0; $i < $count; $i++) {
        DummyJob::dispatch()->allOnQueue(Arr::random(['default', 'dummy', 'dummy', 'dummy']));
    }
});

Route::get('/emails/{count}', static function ($count) {
    for ($i = 0; $i < $count; $i++) {
        $message = (new DummyMail())->onQueue('emails');
        Mail::to('test@app.local')->queue($message);
    }

    return 'Done!';
});

