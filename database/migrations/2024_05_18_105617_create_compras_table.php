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
                Schema::create('compras', function (Blueprint $table) {
                    $table->id();
                    $table->unsignedBigInteger('user_id');
                    $table->unsignedBigInteger('product_id');
                    $table->string('action')->default('terminado');

                    $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
                    $table->foreign('product_id')->references('id')->on('productos')->onDelete('cascade');
                  

                    $table->timestamps();
                });
            }

            /**
             * Reverse the migrations.
             */
            public function down(): void
            {
                Schema::dropIfExists('compras');
            }
        };
