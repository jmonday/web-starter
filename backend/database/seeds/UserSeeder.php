<?php

use App\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(): void
    {
        User::truncate();

        DB::table('users')->insert([
            'name' => 'Michael Bolton',
            'email' => 'admin@localhost',
            'password' => Hash::make('Password01!'),
            'email_verified_at' => now(),
            'remember_token' => Str::random(10),
            'is_admin' => true,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        factory(App\User::class, 24)->create();
    }
}
