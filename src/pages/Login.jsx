import { useState, useEffect } from 'react';
import '../components/styles/Login.css';

export default function Login() {

  //Función para alternar el estado del componente  manejando el useState
  const [formVisible, setFormVisible] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);

  // useEffect para inicializar los estados cuando el componente se monta
  useEffect(() => {
    setOverlayVisible(false);
    setFormVisible(false);
  }, []);
// Función para alternar la visibilidad del formulario y el overlay
  const toggleForm = () => {
    setFormVisible(!formVisible);
    setOverlayVisible(!overlayVisible);
  };

  return (
    <div>
      <main className='main'>
        <div className='contenedor'>
          <section className='slice triangle'>
            <div className='container'>
              <h2>Regístrate o Inicia sesión</h2>
            </div>
          </section>

          <section className='usuario'>
            <div className='contenedor_opciones-usuario md:flex md:justify-center md:items-center md:w-4/5 md:mx-auto md:h-5/6 md:bg-neutral-light'>
              <div className='texto_opciones-usuario hidden md:flex md:justify-between md:w-full md:bg-primario md:rounded-3xl'>
                <div className='opciones_no_registrado md:w-2/3 md:p-10 md:text-neutral-light md:rounded-xl'>
                  <h2 className='titulo_no_registrado text-lg'>¿No tienes una cuenta? Regístrate</h2>
                  <p id='p-registro' className='texto_no_registrado text-sm'>Regístrate para ver nuestras Ofertas.</p>
                  <button
                    className='registro_no_registrado mt-7 border-1 border-neutral-light rounded-lg  text-neutral-light uppercase transition duration-200 hover:bg-neutral-light hover:text-acento'
                    id='boton_registro'
                    
                    onClick={toggleForm}>
                    Regístrate
                  </button>
                </div>

                <div className='opciones_registrado md:w-2/3 md:p-10 md:text-neutral-light md:rounded-xl'>
                  <h2 className='titulo_registrado text-lg'>¿Tienes una cuenta?</h2>
                  <p className='texto_registrado text-sm'>Inicia tu sesión y empieza a contratar tu servicio.</p>
                  <button
                    className='registro_no_registrado mt-7 border-1 border-neutral-light rounded-lg  text-neutral-light uppercase transition duration-200 hover:bg-neutral-light hover:text-acento'
                    id='boton_inicio_sesion'
                    name='iniciar'
                    onClick={toggleForm}>
                    Iniciar sesiónn
                  </button>
                </div>
              </div>

              <div
                className={`formularios_opciones-usuario ${formVisible ? 'Left' : 'Right'} md:absolute md:top-1/2 md:left-8 md:w-1/2 md:bg-neutral-light md:rounded-lg md:shadow-lg md:transform md:transition-transform md:duration-300`}
                id='formularios_opciones-usuario'>
                <div className='formulario_inicio_sesion relative md:opacity-100 md:visible'>
                  <h2 className='titulo_formulario text-2xl font-bold uppercase text-primario mb-11'>Iniciar sesión</h2>
                  <form className='formulario_form'>
                    <fieldset className='fieldset_formulario'>
                      <div className='campo_formulario mb-2'>
                        <input
                          name='email'
                          id='correo_electronico1'
                          type='email'
                          placeholder='Correo electrónico'
                          className='entrada_campo_formulario p-2 mb-2 w-full'
                        />
                      </div>
                      <span id='correoError'></span>
                      <div className='campo_formulario mb-2'>
                        <input
                          name='password'
                          id='contraseña1'
                          type='password'
                          placeholder='Contraseña'
                          className='entrada_campo_formulario p-2 mb-2 w-full'
                        />
                      </div>
                      <span id='contraseñaError'></span>
                    </fieldset>
                    <div className='botones_formulario flex justify-between items-center mt-9'>
                      <button type='button' className='boton_olvido text-sm text-acento underline transition duration-200 hover:text-primario'>
                        ¿Olvidaste la contraseña?
                      </button>
                      <button
                        type='submit'
                        id='submitLogin'
                        className='accion_botones_formulario bg-acento rounded-lg text-primario uppercase text-sm transition duration-200 hover:bg-acento-light'>
                        Iniciar sesión
                      </button>
                    </div>
                  </form>
                </div>

                <div className='formulario_registro relative md:opacity-0 md:invisible md:transform md:translate-x-28'>
                  <h2 className='titulo_formulario text-2xl font-bold uppercase text-primario  mb-4'>Regístrate</h2>
                  <form className='formulario_form'>
                    <fieldset className='fieldset_formulario'>
                      <div className='campo_formulario mb-2'>
                        <input
                          type='text'
                          id='nombre_completo'
                          name='nombre_completo'
                          placeholder='Nombre completo'
                          className='entrada_campo_formulario p-2 w-full'
                          required
                        />
                      </div>
                      <div className='campo_formulario mb-2'>
                        <input
                          type='email'
                          id='correo_electronico'
                          name='correo_electronico'
                          placeholder='Correo electrónico'
                          className='entrada_campo_formulario p-2  w-full'
                          required
                        />
                      </div>
                      <div className='campo_formulario '>
                        <input
                          type='password'
                          id='contraseña'
                          name='contraseña'
                          placeholder='Contraseña'
                          className='entrada_campo_formulario p-2  w-full'
                          required
                        />
                      </div>
                      <div className='campo_formulario mb-2'>
                        <input
                          type='password'
                          id='contraseña_confirmation'
                          name='contraseña_confirmation'
                          placeholder='Confirmar contraseña'
                          className='entrada_campo_formulario p-2  w-full'
                          required
                        />
                      </div>
                      <span id='errorPassword'></span>
                    </fieldset>
                    <div className='botones_formulario flex justify-end '>
                      <input
                        type='submit'
                        id='submitRegistro'
                        value='Regístrate'
                        className='accion_botones_formulario bg-acento rounded-lg md:py-1 py-4 px-2 text-primario uppercase text-sm transition duration-200 hover:bg-acento-light'
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Overlay para el formulario*/}
      <div
        className={`cta-blur-overlay ${overlayVisible ? '' : 'hidden'}`}
        onClick={toggleForm}
      ></div>
    </div>
  );
}
