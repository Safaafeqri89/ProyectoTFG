<?php
namespace Tests\Feature;


use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Laravel\Sanctum\Sanctum;


class LoginTest extends TestCase
{
    use RefreshDatabase;
    public function testUserRegistration()
    {
        $userData = [
            'nombre_completo' => 'John Doe',
            'correo_electronico' => 'john@example.com',
            'contraseña' => 'password123',
        ];
    
        $response = $this->postJson('api/register', $userData);
    
        $response->assertStatus(200)
            ->assertJsonStructure([
                'user' => [
                    'id',
                    'name',
                    'email',
                    'created_at',
                    'updated_at',
                ],
                'message',
            ]);
    
        $this->assertDatabaseHas('users', [
            'name' => $userData['nombre_completo'],
            'email' => $userData['correo_electronico'],
        ]);
    }
    
    


    public function test_login()
    {
        $user = User::factory()->create([
            'email' => 'john@example.com',
            'password' => Hash::make('password123'),
        ]);


        $response = $this->postJson('/api/login', [
            'email' => $user->email,
            'password' => 'password123',
        ]);
        $response->assertStatus(200)
            ->assertJsonStructure([
                'user' => [
                    'id',
                    'name',
                    'email',
                    'created_at',
                    'updated_at',
                ],
                'message',
                'access_token',
                'status',
            ]);
    
    }


   public function testLogout()
{
$user = User::factory()->create();
Sanctum::actingAs($user);
$response = $this->postJson('/api/logout');
$response->assertStatus(200);
$this->assertCount(0, $user->tokens);
}

 }
