<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categoria extends Model
{
        use HasFactory;
    
        protected $fillable = [
            'nombre_categoria', // Agrega 'nombre_categoria' a la lista de atributos llenables
        ];
    
        // Define una relación uno a muchos con el modelo Producto
        public function productos()
        {
            return $this->hasMany(Producto::class, 'id_categoria');
        }
    }
    
    
