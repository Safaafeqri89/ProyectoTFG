<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        // Validar los datos de entrada
        $request->validate([
            'nombre_completo' => 'required|string',
            'correo_electronico' => 'required|email|unique:users,email',
            'contraseña' => 'required|string|min:6',
        ]);

        // Crear un nuevo usuario
        $user = new User([
            'name' => $request->input('nombre_completo'),
            'email' => $request->input('correo_electronico'),
            'password' => Hash::make($request->input('contraseña')),
        ]);
        $user->save();

        return response()->json(['message' => 'Usuario registrado exitosamente', 'user' => $user], 201);
    }

    public function login(Request $request)
    {
        // Validar los datos de entrada para el inicio de sesión
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);

        // Intentar autenticar al usuario
        if (!auth()->attempt($request->only('email', 'password'))) {
            return response()->json(['message' => 'Credenciales inválidas'], 401);
        }

        // Generar un token de acceso para el usuario autenticado
        $accessToken = auth()->user()->createToken('authToken')->plainTextToken;

        return response()->json([
            'access_token' => $accessToken,
            'user' => auth()->user(),
            'status' => true,
            'message' => 'Inicio de sesión válido'
        ], 201);
    }
}
