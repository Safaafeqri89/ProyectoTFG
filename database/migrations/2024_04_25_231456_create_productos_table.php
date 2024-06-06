            <?php

            use Illuminate\Database\Migrations\Migration;
            use Illuminate\Database\Schema\Blueprint;
            use Illuminate\Support\Facades\Schema;

            return new class extends Migration
            {
                /**
                 * Run the migrations.
                 */
                public function up(): void
                {

                    Schema::create('productos', function (Blueprint $table) {
                        $table->id();
                        $table->string('imagen');
                        $table->string('nombre');
                        $table->text('descripcion');
                   $table->unsignedBigInteger('id_categoria')->nullable();
                        $table->integer('precio');
                        $table->timestamps();
               $table->foreign('id_categoria')->references('id')->on('categorias')->onDelete('cascade'); 
                    });
                }

                /**
                 * Reverse the migrations.
                 */
                public function down(): void
                {
                    Schema::dropIfExists('productos');
                }
            };
