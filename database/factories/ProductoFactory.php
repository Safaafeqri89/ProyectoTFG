<?php

namespace Database\Factories;
use App\Models\Producto;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Producto>
 */
class ProductoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
  */

    protected $model = Producto::class;

    public function definition()
    {
        return [
            'nombre' => $this->faker->name,
            'id_categoria' => $this->faker->numberBetween(1, 10), // ejemplo de categoría
            'descripcion' => $this->faker->paragraph,
            'precio' => $this->faker->randomFloat(2, 10, 100),
            'imagen' => 'default.jpg', // nombre de imagen predeterminado
        ];
    }



}
