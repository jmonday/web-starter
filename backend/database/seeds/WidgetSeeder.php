<?php

use App\Widget;
use Illuminate\Database\Seeder;

class WidgetSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     * @throws Exception
     */
    public function run(): void
    {
        Widget::truncate();
        factory(App\Widget::class, 100)->create();
    }
}
