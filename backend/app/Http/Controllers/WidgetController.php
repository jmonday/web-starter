<?php

namespace App\Http\Controllers;

use App\Widget;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Cache;

class WidgetController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        return response()->json([
            'widgets' => Widget::all(),
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param string $slug
     * @return JsonResponse
     */
    public function show(string $slug): JsonResponse
    {
        return response()->json([
            'widget' => Cache::tags(['widget'])->remember("widget:{$slug}", 60 * 60, static function () use ($slug) {
                return Widget::firstWhere('slug', $slug);
            }),
        ]);
    }
}
