<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @OA\Schema(
 *     schema="Producto",
 *     type="object",
 *     title="Producto",
 *     required={"nombre", "id_categoria", "descripcion", "precio"},
 *     @OA\Property(
 *         property="id",
 *         type="integer",
 *         description="ID a producto"
 *     ),
 *     @OA\Property(
 *         property="nombre",
 *         type="string",
 *         description="Nombre de producto"
 *     ),
 *     @OA\Property(
 *         property="id_categoria",
 *         type="integer",
 *         description="ID categoria"
 *     ),
 *     @OA\Property(
 *         property="descripcion",
 *         type="string",
 *         description="Descripcion  producto"
 *     ),
 *     @OA\Property(
 *         property="precio",
 *         type="number",
 *         format="float",
 *         description="precio producto"
 *     ),
 *     @OA\Property(
 *         property="imagen",
 *         type="string",
 *         description="Image URL of the producto"
 *     )
 * )
 */
class Producto extends Model
{
    use HasFactory;

    protected $fillable = [
        'imagen',
        'nombre',
        'descripcion',
        'id_categoria',
        'precio',
    ];

    public function categorias()
    {
        return $this->belongsTo(Categoria::class, 'id_categoria');
    }
        // Definir la realacion con la Compra

    public function compras()

    {
        return $this->hasMany(Compra::class, 'product_id');
    }
}
