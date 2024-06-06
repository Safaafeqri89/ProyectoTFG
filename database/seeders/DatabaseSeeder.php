<?php

namespace Database\Seeders;

use App\Models\Categoria; // Add a semicolon here

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        
    Categoria::factory(3)->create();

 }
}
