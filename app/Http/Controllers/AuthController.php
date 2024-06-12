<?php

namespace App\Http\Controllers;
use App\Http\Requests\AuthRequest;


use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    /**
     * @OA\Post(
     *     path="/api/register",
     *     summary="Registrar nuevo user",
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             type="object",
     *             @OA\Property(property="nombre_completo", type="string", example="John Doe"),
     *             @OA\Property(property="correo_electronico", type="string", example="john.doe@example.com"),
     *             @OA\Property(property="contraseña", type="string", example="password123")
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="User registered successfully",
     *         @OA\JsonContent(
     *             type="object",
     *             @OA\Property(property="message", type="string", example="Usuario registrado exitosamente"),
     *             @OA\Property(
     *                 property="user",
     *                 type="object",
     *                 @OA\Property(property="id", type="integer", example=1),
     *                 @OA\Property(property="name", type="string", example="John Doe"),
     *                 @OA\Property(property="email", type="string", example="john.doe@example.com")
     *             )
     *         )
     *     ),
     *     @OA\Response(
     *         response=422,
     *         description="Validation error",
     *         @OA\JsonContent(
     *             type="object",
     *             @OA\Property(property="message", type="string", example="The given data was invalid."),
     *             @OA\Property(property="errors", type="object")
     *         )
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="Internal Server Error"
     *     )
     * )
     */
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


     /**
     * @OA\Post(
     *     path="/api/login",
     *     summary="Login a user",
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             type="object",
     *             @OA\Property(property="email", type="string", example="john.doe@example.com"),
     *             @OA\Property(property="password", type="string", example="password123")
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Login successful",
     *         @OA\JsonContent(
     *             type="object",
     *             @OA\Property(property="access_token", type="string"),
     *             @OA\Property(property="status", type="boolean", example=true),
     *             @OA\Property(property="message", type="string", example="Inicio de sesión válido"),
     *             @OA\Property(
     *                 property="user",
     *                 type="object",
     *                 @OA\Property(property="id", type="integer", example=1),
     *                 @OA\Property(property="name", type="string", example="John Doe"),
     *                 @OA\Property(property="email", type="string", example="john.doe@example.com")
     *             )
     *         )
     *     ),
     *     @OA\Response(
     *         response=401,
     *         description="credenciales invalidos",
     *         @OA\JsonContent(
     *             type="object",
     *             @OA\Property(property="message", type="string", example="Credenciales inválidas")
     *         )
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="Internal Server Error"
     *     )
     * )
     */
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


/**
     * @OA\Post(
     *     path="/api/logout",
     *     summary="Logout a user",
     *     security={{"bearerAuth":{}}},
     *     @OA\Response(
     *         response=200,
     *         description="Logout successful",
     *         @OA\JsonContent(
     *             type="object",
     *             @OA\Property(property="message", type="string", example="Successfully logged out")
     *         )
     *     ),
     *     @OA\Response(
     *         response=401,
     *         description="Unauthorized",
     *         @OA\JsonContent(
     *             type="object",
     *             @OA\Property(property="message", type="string", example="Unauthorized")
     *         )
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="Internal Server Error"
     *     )
     * )
     */
    public function logout(){
       auth()->user()->tokens()->delete();
       return response()->json(['message'=>'successfully logged out'],200);
    }

    
}
