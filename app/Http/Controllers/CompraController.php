<?php

namespace App\Http\Controllers;
use App\Models\User;
use App\Models\Compra;
use App\Models\Producto;
use App\Mail\SendEmail;
use App\Mail\formEmail;
use Illuminate\Support\Facades\Mail;

use Illuminate\Http\Request;

class CompraController extends Controller
{
    public function store(Request $request)
    {
      
        try{
            //obtener los datos de la solicitud, incluido el ID de usuario
           // ($user_id) y los IDs de los productos ($producto_ids).
            $user_id = $request->user_id;
            $producto_ids = $request->producto_ids;

           // busca el usuario en la base de datos utilizando su ID
            $user = User::find($user_id);
            $email = $user->email;
            $name = $user->name;
            
            //verificar si es solamente un producto se crea la compra con id user y id producto en atributo de compra en un array asosiativo
            if($producto_ids == 1){
                $compra = new Compra([
                    'user_id'=>$user_id,
                    'product_id'=>$producto_ids,
                ]);
                $productos = Producto::find($producto_id);

               // Se envía un correo electrónico al usuario con detalles sobre el producto comprado. Para esto, se utiliza la clase Mail de Laravel para enviar el correo electrónico y se pasa 
               //al constructor de la clase sendEmail el nombre del usuario y los detalles del producto.

                Mail::to($email)->send(new sendEmail($name, $productos));
                return response()->json(['message' => 'productos añadidos '], 200);
            }else{
                //inicializa un array vacío
                $productos = [];
                // itera sobre cada ID de producto en el array $producto_ids
                foreach ($producto_ids as $producto_id) {
                    $producto = Producto::find($producto_id);
                    $productos[] = $producto;
                }
                
                //iteración para crear y guardar las compras
                foreach ($producto_ids as $producto_id) {
                    $compra = new Compra();
                    $compra->user_id = $user_id;
                    $compra->product_id = $producto_id;
                    $compra->save();
                    
                }
              //  envía un correo electrónico al usuario con los detalles de los productos añadidos
                Mail::to($email)->send(new sendEmail($name, $productos));
                return response()->json(['message' => 'productos añadidos'], 200);
            }

        }catch(\Exception $e){
            
            return response()->json(['message' => $e->getMessage()], 500);
        
        }

    }

    public function sendEmail(Request $request)
    {
      try {
       // Obtener datos de la solicitud
        $data =[
                'name'=>$request->name,
                'email'=>$request->email,
                'message'=>$request->mensaje,
                'categoria'=>$request->categoria,
                'tel'=>$request->tel,
            
        ];
       // Se utiliza la clase Mail de Laravel para enviar el correo electrónico
    
        Mail::to('tudespacho@gmail.com')->send(new formEmail($data));
        return response()->json(['message' => 'Email enviado correctamente']);
      } catch (\Exception $e) {
        return response()->json(['message' => 'Error al enviar email', 'error' => $e->getMessage()], 500);
      }
    }
}
