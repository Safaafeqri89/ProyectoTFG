import "./styles/Footer.css";
import logo from "../assets/logo.png";
import facebook from "../assets/icons/socials/facebook.svg";
import instagram from "../assets/icons/socials/instagram.svg";
import tiktok from "../assets/icons/socials/tiktok.svg";
import twitter from "../assets/icons/socials/twitter.svg";
import youtube from "../assets/icons/socials/youtube.svg";
//componente footer
export default function Footer() {
  return (
    <>
      {" "}
      <footer>
        <section className='footer'>
          <article className='contenido-footer'>
            <button id='scrollToTopBtn' title='Ir arriba'>
              ∧
            </button>

            <div className='textos-footer  '>
              <div className='seccion-texto-footer sobre-nosotros'>
                <h3>Sofware Pymes</h3>
                <ul>
                  <li>Portal del Empleado</li>
                  <li>Sostenibilidad</li>
                  <li>Portal para Clientes</li>
                  <li>Diseño Web</li>
                </ul>
              </div>

              <div className='barra-divisoria-footer'></div>

              <div className='seccion-texto-footer Software'>
                <h3>Apps</h3>
                <ul>
                  <li>Software Abogados</li>
                  <li>Software Gestorías</li>
                </ul>
              </div>

              <div className='barra-divisoria-footer'></div>

              <div className='seccion-texto-footer informacion-importante'>
                <h3>Gestion Clientes</h3>
                <ul>
                  <li>Gestión Documental</li>
                  <li>Gestión de Expedientes</li>
                  <li>Actuaciones y Trabajos</li>
                  <li>Facturación</li>
                </ul>
              </div>

              <div className='barra-divisoria-footer'></div>

              <div className='seccion-texto-footer legal'>
                <h3>Empresa y legal</h3>
                <div className='footer-legal-columnas'>
                  <ul>
                    <li>Sobre nosotros</li>
                    <li>Blog</li>
                    <li>Portal del Empleado</li>
                  </ul>
                </div>
              </div>

              <div className='barra-divisoria-footer'></div>

              <div className='seccion-texto-footer Software hidden md:block'>
                <h3>Apps</h3>
                <ul>
                  <li>Software Abogados</li>
                  <li>Software Gestorías</li>
                </ul>
              </div>
            </div>

            <nav className='sitemap '>
              <ul>
                <li>
                  <a href='#'>Condiciones generales</a>
                </li>
                <li>
                  <a href='#'>Aviso legal</a>
                </li>
                <li>
                  <a href='#'>Política de Privacidad</a>
                </li>
                <li>
                  <a href='#'>Disclosure Google Api Policy</a>
                </li>
              </ul>
            </nav>

            <div className='logo--redes-sociales'>

              <div className='logo-wrapper-footer'>
                <a href='index.html'>
                  <img
                    className='h-16 cursor-pointer transition-transform duration-200 hover:scale-105'
                    src={logo}
                    alt='logo'
                  />
                </a>
              </div>

              <div className='barra-divisoria-footer--segundo-wrapper hidden'></div>

              <div className='redes-sociales'>
                <div className='redes-sociales-iconos'>
                <h4>Síguenos en:</h4>
                  <div className='twitter-wrapper'>
                    <img
                      className='icono-social-footer'
                      src={twitter}
                      alt='twitter'
                    />
                  </div>
                  <div className='instagram-wrapper'>
                    <img
                      className='icono-social-footer'
                      src={instagram}
                      alt='instagram'
                    />
                  </div>
                  <div className='youtube-wrapper'>
                    <img
                      className='icono-social-footer'
                      src={youtube}
                      alt='youtube'
                    />
                  </div>
                  <div className='tiktok-wrapper'>
                    <img
                      className='icono-social-footer'
                      src={tiktok}
                      alt='tiktok'
                    />
                  </div>
                  <div className='facebook-wrapper'>
                    <img
                      className='icono-social-footer'
                      src={facebook}
                      alt='facebook'
                    />
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>
      </footer>
    </>
  );
}
