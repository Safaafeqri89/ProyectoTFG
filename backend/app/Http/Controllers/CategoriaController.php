<?php

namespace App\Http\Controllers;
use App\Models\Categoria;

use Illuminate\Http\Request;

class CategoriaController extends Controller
{
     public function index(){
        try {

             $categorias = Categoria::all();

            return response()->json(['categoria' => $categorias], 200);
       } catch (\Exception $e) {
           return response()->json(['message' => 'Error fetching categorias', 'error' => $e->getMessage()], 500);
        }
     }
}
