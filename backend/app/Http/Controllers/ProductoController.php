<?php

namespace App\Http\Controllers;
use App\Models\Producto;

use Illuminate\Http\Request;

class ProductoController extends Controller
{
    public function index()
    {
        $productos = Producto::with('categorias')->get();
        return response()->json($productos, 200);
    }

    public function store(Request $request)
    {
        $request->validate([
            'imagen' => 'required',
            'nombre' => 'required|string|max:255',
            'descripcion' => 'required|string',
        'id_categoria' => 'required|integer',
            'precio' => 'required|integer|min:0',
        ]);

        try {
            if ($request->hasFile('imagen')) {
                $imagen = $request->file('imagen');
                $imageName = time() . '.' . $imagen->getClientOriginalExtension();
                $imagen->move(public_path('images'), $imageName);
            } else {
                $imageName = '';
            }

            $producto = Producto::create([
                'imagen' => $imageName,
                'nombre' => $request->nombre,
             'id_categoria' => $request->id_categoria,
                'descripcion' => $request->descripcion,
                'precio' => $request->precio
            ]);

            return response()->json($producto, 201);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function update(Request $request, $id)
    {
        try {
            $producto = Producto::find($id);
    
            if (!$producto) {
                return response()->json(['error' => 'Producto not found'], 404);
            }
    
            $request->validate([
                'imagen' => 'nullable', 
                'nombre' => 'required|string|max:255',
                'descripcion' => 'required|string',
            'id_categoria' => 'required|integer',
                'precio' => 'required|integer|min:0',
            ]);
    
            $imagenName = $producto->imagen; // Mantener la imagen existente si no se proporciona una nueva
    
            if ($request->hasFile('imagen')) {
                $imagen = $request->file('imagen');
                $imagenName = time() . '.' . $imagen->getClientOriginalExtension();
                $imagen->move(public_path('images'), $imagenName);
            }
    
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
    
    public function destroy($id)
    {
        try {
            $producto = Producto::find($id);
            if ($producto) {
                $producto->delete();
                return response()->json(['message' => 'Producto deleted'], 200);
            } else {
                return response()->json(['error' => 'Producto not found'], 404);
            }
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function insertarProductos(Request $request)
    {
        try {
            $context = $request->getContent();

            if (!$context) {
                return response()->json(['error' => 'vacio'], 400);
            }

            $productoData = json_decode($context, true);

            if (!is_array($productoData)) {
                return response()->json(['error' => 'Formato invalido'], 400);
            }

            foreach ($productoData['productos'] as $producto) {
                if (!isset($producto['nombre'])) {
                    return response()->json(['error' => 'Producto nombre is missing'], 400);
                }

                $existingProduct = Producto::where('nombre', $producto['nombre'])->first();

                if ($existingProduct) {
                    if ($existingProduct->toArray() != $producto) {
                        $existingProduct->fill($producto);
                        $existingProduct->save();
                        \Log::info('Producto modificado con el nombre: ' . $producto['nombre']);
                    } else {
                        \Log::info('Producto con nombre: ' . $producto['nombre'] . ' ya está actualizado');
                    }
                } else {
                    Producto::create([
                        'id' => $producto['id'],
                        'nombre' => $producto['nombre'],
                        'descripcion' => $producto['descripcion'],
                        'imagen' => $producto['imagen'],
                        'precio' => $producto['precio']
                    ]);
                    \Log::info('Producto creado con nombre: ' . $producto['nombre']);
                }
            }

            return response()->json(['message' => 'Productos created'], 201);
        } catch (\Exception $e) {
            \Log::error('Error insertando productos: ' . $e->getMessage());
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function show($id)
    {
        $producto = Producto::with('categorias')->find($id);
    
        if (!$producto) {
            return response()->json(['message' => 'Producto not found'], 404);
        }
    
        return response()->json([
            'producto' => $producto,
            'nombre_categoria' => $producto->categorias->nombre_categoria,
        ]);
    }
    

}
