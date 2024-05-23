<?php

namespace App\Http\Controllers;
use App\Models\User;
use App\Models\Compra;
use App\Models\Producto;
use App\Mail\SendEmail;
use Illuminate\Support\Facades\Mail;

use Illuminate\Http\Request;

class ComparController extends Controller
{
    public function store(Request $request){
        try{
            $user_id = $request->user_id;
            $producto_ids = $request->producto_ids;

            $user = User::find($user_id);
            $email = $user->email;
            $name = $user->name;
            
            
            if($producto_ids == 1){
                $list = new Lists();
                $list->user_id = $user_id;
                $list->product_id = $producto_ids;
                $list->save();
                $productos = Producto::find($producto_id);

                Mail::to($email)->send(new sendEmail($name, $productos));
                return response()->json(['message' => 'productos added to list'], 200);
            }else{

                $productos = [];
                foreach ($producto_ids as $producto_id) {
                    $producto = Producto::find($producto_id);
                    $productos[] = $producto;
                }
                
                foreach ($producto_ids as $producto_id) {
                    $list = new Compra();
                    $list->user_id = $user_id;
                    $list->product_id = $producto_id;
                    $list->save();
                    
                }
                Mail::to($email)->send(new sendEmail($name, $productos));
                return response()->json(['message' => 'productos added to list'], 200);
            }

        }catch(\Exception $e){
            \Log::error($e->getMessage());
            return response()->json(['message' => $e->getMessage()], 500);
        
        }

    }
}
