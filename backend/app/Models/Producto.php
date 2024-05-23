<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
}
