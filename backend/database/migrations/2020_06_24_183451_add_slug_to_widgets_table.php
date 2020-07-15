<?php

use App\Widget;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;

class AddSlugToWidgetsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up(): void
    {
        Schema::table('widgets', static function (Blueprint $table) {
            $table->string('slug')->nullable()->unique();
        });

        foreach (Widget::all() as $widget) {
            $widget->slug = Str::slug($widget->name);
            $widget->save();
        }

        Schema::table('widgets', static function (Blueprint $table) {
            $table->string('slug')->nullable(false)->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down(): void
    {
        Schema::table('widgets', static function (Blueprint $table) {
            $table->dropColumn('slug');
        });
    }
}
