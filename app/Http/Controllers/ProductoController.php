<?php

namespace App\Http\Controllers;
use App\Models\Producto;
use App\Http\Requests\ProductoRequest;
use Illuminate\Support\Facades\Auth;

use Illuminate\Http\Request;
class ProductoController extends Controller
{
     /**
     * @OA\Get(
     *     path="/api/productos",
     *     summary="Ver todos productos",
     *     @OA\Response(
     *         response=200,
     *         description="A list of productos",
     *         @OA\JsonContent(type="array", @OA\Items(ref="#/components/schemas/Producto"))
     *     )
     * )
     */
    public function index()
    {
        $productos = Producto::with('categorias')->get();
        return response()->json($productos, 200);
    }


/**
     * @OA\Post(
     *     path="/api/productos",
     *     summary="Crear nuevo producto",
     *     security={{"bearerAuth": {}}},
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(ref="#/components/schemas/ProductoRequest")
     *     ),
     *     @OA\Response(
     *         response=201,
     *         description="Producto creado successfully",
     *         @OA\JsonContent(ref="#/components/schemas/Producto")
     *     ),
     *     @OA\Response(
     *         response=401,
     *         description="Unauthorized"
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="Internal Server Error"
     *     ),
     * 
     * )
     */
    public function store(ProductoRequest $request)
    {
               // Verificar si el usuario autenticado es un admin

        
        try {
            if(Auth::user()->role != 'admin' ){
             return response()->json(['error'=>'Usuario no autorizado']);
            }
            // Manejar la subida de imagen si se proporciona una imagen
            if ($request->hasFile('imagen')) {
                $imagen = $request->file('imagen');
                $imageName = time() . '.' . $imagen->getClientOriginalExtension();
                $imagen->move(public_path('images'), $imageName);
            } else {
                $imageName = '';
            }
            // Crear un nuevo producto con los datos proporcionados

            $producto = Producto::create([
                'imagen' => $imageName,
                'nombre' => $request->nombre,
                'id_categoria' => $request->id_categoria,
                'descripcion' => $request->descripcion,
                'precio' => $request->precio
            ]);

            return response()->json($producto, 201);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }


     /**
     * @OA\Put(
     *     path="/api/productos/{id}",
     *     summary="Modificar a producto",
     *     security={{"bearerAuth":{}}},
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(ref="#/components/schemas/ProductoRequest")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Producto modificado correctamente",
     *         @OA\JsonContent(ref="#/components/schemas/Producto")
     *     ),
     *     @OA\Response(
     *         response=401,
     *         description="Unauthorized"
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Producto not found"
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="Internal Server Error"
     *     )
     * )
     */
    public function update(ProductoRequest $request, $id)
    {

        try {

            if(Auth()->user()->role != 'admin'){
                return response()->json(['error'=>'Usuario no autorizado'],401);
               }
                           // Buscar el producto por su ID

            $producto = Producto::find($id);
    
            if (!$producto) {
                return response()->json(['error' => 'Producto not found'], 404);
            }
    
    
            $imagenName = $producto->imagen; // Mantener la imagen existente si no se proporciona una nueva
    
            if ($request->hasFile('imagen')) {
                $imagen = $request->file('imagen');
                $imagenName = time() . '.' . $imagen->getClientOriginalExtension();
                $imagen->move(public_path('images'), $imagenName);
            }
                // Actualizar el producto con los nuevos datos

            $producto->update([
                'nombre' => $request->nombre,
             'id_categoria' => $request->id_categoria,
                'descripcion' => $request->descripcion,
                'precio' => $request->precio,
                'imagen' => $imagenName
            ]);
    
            return response()->json(['producto' => $producto, 'message' => 'Producto modificado'], 200);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
    
     /**
     * @OA\Delete(
     *     path="/api/productos/{id}",
     *     summary="Delete a producto",
     *     security={{"bearerAuth":{}}},
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Producto eliminado successfully"
     *     ),
     *     @OA\Response(
     *         response=401,
     *         description="Unauthorized"
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Producto not found"
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="Internal Server Error"
     *     )
     * )
     */
    public function destroy($id)
    {
        try {

            if(Auth()->user()->role != 'admin')
            {
                return response()->json(['error'=>'Usuario no autorizado'],401);
               }
            $producto = Producto::find($id);
            if ($producto)
             {
                $producto->delete();
                return response()->json(['message' => 'Producto Eliminado'], 200);
              } else 
              {
                return response()->json(['error' => 'Producto not found'], 404);
                }
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
    


/**
 * @OA\Get(
 *     path="/api/producto/{id}",
 *     summary="Ver producto por ID",
 *     description="Obtiene los detalles de un producto específico mediante su ID.",
 *     operationId="getProductoById",
 *     @OA\Parameter(
 *         name="id",
 *         in="path",
 *         required=true,
 *         description="ID del producto que se desea obtener",
 *         @OA\Schema(
 *             type="integer"
 *         )
 *     ),
 *     @OA\Response(
 *         response=200,
 *         description="Operación exitosa",
 *         @OA\JsonContent(
 *             type="object",
 *             @OA\Property(property="producto", ref="#/components/schemas/Producto"),
 *             @OA\Property(
 *                 property="nombre_categoria",
 *                 type="string",
 *                 example="Electrónicos"
 *             )
 *         )
 *     ),
 *     @OA\Response(
 *         response=404,
 *         description="Producto no encontrado",
 *         @OA\JsonContent(
 *             type="object",
 *             @OA\Property(property="message", type="string", example="Producto not found")
 *         )
 *     )
 * )
 */

  

    public function show($id)
    {
        $producto = Producto::with('categorias')->find($id);
    
        if (!$producto)
         {
            return response()->json(['message' => 'Producto not found'], 404);
        }
    
        return response()->json([
            'producto' => $producto,
            'nombre_categoria' => $producto->categorias->nombre_categoria,
        ]);
    }
    

}
