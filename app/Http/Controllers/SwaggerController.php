<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
/**
 * @OA\OpenApi(
 *     @OA\Info(
 *         title="API Documentacion",
 *         version="1.0.0",
 *         description=" API documentacion tudespachonet."
 *     )
 * )
 * 
 * @OA\Components(
 *     @OA\SecurityScheme(
 *         securityScheme="bearerAuth",
 *         type="http",
 *         scheme="bearer",
 *         bearerFormat="JWT"
 *     ),
 *     @OA\Schema(
 *         schema="Categoria",
 *         type="object",
 *         description="Category model",
 *         @OA\Property(property="id", type="integer", example=1),
 *         @OA\Property(property="name", type="string", example="Electronics"),
 *         @OA\Property(property="description", type="string", example="All electronic items")
 *     )
 * )
 */

class SwaggerController extends Controller
{
    //
}
