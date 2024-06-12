<?php

namespace App\Http\Controllers;
use App\Models\Categoria;

use Illuminate\Http\Request;

class CategoriaController extends Controller
{
     /**
     * @OA\Get(
     *     path="/api/categorias",
     *     summary="Ver todas categorias",
     *     description="Ver categorias",
     *     @OA\Response(
     *         response=200,
     *         description="Categories  successfully",
     *         @OA\JsonContent(
     *             type="object",
     *             @OA\Property(
     *                 property="categoria",
     *                 type="array",
     *                 @OA\Items(ref="#/components/schemas/Categoria")
     *             )
     *         )
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="Error fetching categorias",
     *         @OA\JsonContent(
     *             type="object",
     *             @OA\Property(property="message", type="string", example="Error fetching categorias"),
     *             @OA\Property(property="error", type="string", example="Detailed error message")
     *         )
     *     )
     * )
     */
     public function index(){
        try {

             $categorias = Categoria::all();

            return response()->json(['categoria' => $categorias], 200);
       } catch (\Exception $e) {
           return response()->json(['message' => 'Error fetching categorias', 'error' => $e->getMessage()], 500);
        }
     }
}
