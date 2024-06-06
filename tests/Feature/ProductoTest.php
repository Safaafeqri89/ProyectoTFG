<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;
use App\Models\Producto;
use App\Models\Categoria;
use App\Models\User;
use Database\Factories\ProductoFactory;

class ProductoTest extends TestCase
{
    
    use RefreshDatabase;

    public function test_store_producto()
    {
         // Crear un usuario con el rol de 'admin' usando una factory
        $user = User::factory()->create();
        $user->role = 'admin';
           
        // Crear una categoría usando una factory
        $categoria = Categoria::factory()->create();
             
        // Generar un token para el usuario
              $token = $user->createToken('TestToken')->plainTextToken;

                 // Preparar los datos del producto
        $data = [
            'nombre' => 'Producto de prueba',
            'id_categoria' => $categoria->id,
            'descripcion' => 'Descripción de prueba',
            'precio' => 100, 
            'imagen' => UploadedFile::fake()->image('producto.jpg')
        ];
        
    // Enviar una solicitud POST al endpoint api/productos con los datos del producto, incluyendo el token de autenticación

        $response = $this->actingAs($user)->postJson('api/productos', $data,[
            'Authorization'=>'Bearer'.$token
        ]);

     
        $response->assertStatus(201);
      
        $this->assertDatabaseHas('productos', [
            'nombre' => 'Producto de prueba',
            'id_categoria' => $categoria->id,
            'descripcion' => 'Descripción de prueba',
            'precio' => 100, 
        ]);
        
        $producto = Producto::first();

        // Asegurar que la respuesta coincida con el producto creado
        $response->assertJson([
            'id' => $producto->id,
            'imagen' => $producto->imagen,
            'nombre' => 'Producto de prueba',
            'id_categoria' => $categoria->id,
            'descripcion' => 'Descripción de prueba',
            'precio' => 100 
        ]);
    }



public function test_update_producto(){

 $categoria = Categoria::factory()->create();
   
    $user = User::factory()->create();
        $user->role = 'admin';
        $token = $user->createToken('TestToken')->plainTextToken;

    $producto = Producto::create([
        'nombre' => 'Producto de prueba',
        'id_categoria' => $categoria->id,
        'descripcion' => 'Descripción de prueba',
        'precio' => 100, 
        'imagen' => UploadedFile::fake()->image('producto.jpg')
    ]);

$test =[
    'nombre' => 'New Product Name',
        'id_categoria' => $categoria->id,
        'descripcion' => 'New Description',
        'precio' => 200, 
        'imagen' =>"test.png"
];



$response= $this->actingAs($user)->putJson('api/productos/'. $producto->id,$test,[
    'Authorization'=>'Bearer'.$token
]);

$response->assertStatus(200);

}


    public function test_destroy_producto()
{
    // Crear un producto
    $categoria = Categoria::factory()->create();
    // Preparar los datos del producto
    $user = User::factory()->create();
    $user->role = 'admin';
    $token = $user->createToken('TestToken')->plainTextToken;

    $producto = Producto::create([
        'nombre' => 'Producto de prueba',
        'id_categoria' => $categoria->id,
        'descripcion' => 'Descripción de prueba',
        'precio' => 100, 
        'imagen' => UploadedFile::fake()->image('producto.jpg')
    ]);

    // Enviar una solicitud DELETE al endpoint para eliminar el producto

   $response= $this->actingAs($user)->delete('api/productos/'. $producto->id,[
    'Authorization'=>'Bearer'.$token
]);

    // Verificar que la solicitud fue exitosa (código de estado 200)
   $response->assertStatus(200);

   

}


    public function test_show_producto()
    {
        $categoria = Categoria::factory()->create();
        $producto = Producto::create([
            'nombre' => 'Producto de prueba',
            'id_categoria' => $categoria->id,
            'descripcion' => 'Descripción de prueba',
            'precio' => 100, 
            'imagen' => UploadedFile::fake()->image('producto.jpg')
        ]);
        
       $response = $this->getJson('/api/producto/'.$producto->id);
    
        // Verificar que la solicitud fue exitosa
        $response->assertStatus(200);
    
        
    }
    
       
    }
    
 
