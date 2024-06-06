
<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductoController;
use App\Http\Controllers\CategoriaController;
use App\Http\Controllers\CompraController;

use App\Http\Controllers\AuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register'])->name('api.register');




Route::middleware('auth:sanctum')->group(function(){
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/productos', [ProductoController::class, 'store']);
    Route::put('/productos/{id}', [ProductoController::class, 'update']);
    Route::delete('/productos/{id}', [ProductoController::class, 'destroy']);
});

Route::get('/productos', [ProductoController::class, 'index']);
Route::get('/producto/{id}', [ProductoController::class, 'show']);

Route::get('/categorias', [CategoriaController::class, 'index']);

Route::post('/compras',[CompraController::class,'store']);
Route::post('/sendEmail',[CompraController::class,'sendEmail']);

Route::get('/not-authorized',function(){
    return response()->json(['error'=>'Usuario no autorizado'],401);
})->name('not-authorized');