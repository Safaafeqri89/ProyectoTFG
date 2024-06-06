<?php

namespace App\Http\Controllers;
use App\Http\Requests\AuthRequest;


use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        // Validar los datos de entrada
      

        //Crear un nuevo usuario
        $user = new User([
            'name' => $request->input('nombre_completo'),
            'email' => $request->input('correo_electronico'),
            'password' => Hash::make($request->input('contraseña')),
        ]);


  
        $user->save();

        return response()->json(['message' => 'Usuario registrado exitosamente', 'user' => $user], 200);
    }

    public function login(Request $request)
{
    try{
        
        $loginData = $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);
    
        if (!auth()->attempt($loginData)) {
            return response()->json(['message' => 'Credenciales inválidas'], 401);
        }
    
        $accessToken = auth()->user()->createToken('authToken')->plainTextToken;
    
        return response()->json([
            'access_token' => $accessToken,
            'status' => true,
            'message' => 'Inicio de sesión válido',
            'user'=>auth()->user()
        ], 200);
    }
    catch (\Exception $e) {
        return response()->json(['error' => $e->getMessage()], 500);
    }
}
        // Validar los datos de entrada para el inicio de sesión



    public function logout(){
       auth()->user()->tokens()->delete();
       return response()->json(['message'=>'successfully logged out'],200);
    }

    
}
