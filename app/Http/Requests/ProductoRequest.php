<?php

namespace App\Http\Requests;
use App\Http\Requests\ProductoRequest;


use Illuminate\Foundation\Http\FormRequest;
/**
 * @OA\Schema(
 *     schema="ProductoRequest",
 *     type="object",
 *     title="ProductoRequest",
 *     required={"nombre", "id_categoria", "descripcion", "precio"},
 *     @OA\Property(property="nombre", type="string"),
 *     @OA\Property(property="id_categoria", type="integer"),
 *     @OA\Property(property="descripcion", type="string"),
 *     @OA\Property(property="precio", type="number", format="float"),
 *     @OA\Property(property="imagen", type="string")
 * )
 */

class ProductoRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {  
        //cumplir los requisitos 
        return [
            'imagen' => 'required',
            'nombre' => 'required|string|max:255',
            'descripcion' => 'required|string',
            'id_categoria' => 'required|integer',
            'precio' => 'required|integer|min:0',
        ];
    }

     }



























    