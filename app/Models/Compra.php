<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Compra extends Model
{
    use HasFactory;
        // Definir the relationship with Producto

    public function producto()
    {
        return $this->belongsTo(Producto::class, 'product_id');
    }
}
