import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import imagen1 from "../assets/slider/imagen1.jpg";
import imagen2 from "../assets/slider/imagen2.jpg";
import imagen3 from "../assets/slider/slider1.jpg";
import imagen4 from "../assets/slider/imagen4.jpg";
import imagen5 from "../assets/slider/slider3.jpg";
import html from "../assets/img/home/html.jpg";
import seo from "../assets/img/home/seo.jpeg";
import plantillas from "../assets/img/home/plantillas.jpg";
import marketing from "../assets/img/home/diseño.jpg";
import desarrolloWeb from "../assets/img/home/icons/diseno-y-desarrollo-web.svg";
import plantillasWeb from "../assets/img/home/icons/amplia-seleccion-de-plantillas-web.svg";
import rrss from "../assets/img/home/icons/rrss.svg";
import seoSvg from "../assets/img/home/icons/seo.svg";
import blog from "../assets/img/home/icons/blog.svg";
import accesibilidad from "../assets/img/home/icons/accesibilidad.svg";
import ampliaPlantillas from "../assets/img/home/icons/amplia-seleccion-de-plantillas-web.svg";
import pasarela from "../assets/img/home/icons/pasarela-de-pago.svg";
import img1 from "../assets/img/home/img1.png";
import neil from "../assets/img/home/neil.webp";
import img3 from "../assets/img/home/img3.png";
import img4 from "../assets/img/home/img5.png";

import './home.css'; 

const Home = () => {
   // Estado para controlar el slide actual en el carrusel
  const [currentSlide, setCurrentSlide] = useState(0);
    // Estado para controlar qué índice del acordeón está activo
  const [activeIndex, setActiveIndex] = useState(null);
    // Array de imágenes para el carrusel
  const images = [imagen1, imagen2, imagen3, imagen4, imagen5];
  // useEffect para configurar un intervalo que cambia de slide cada 3 segundos

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // cambiar interval cada (3 segundo)

    return () => clearInterval(interval);
  }, [currentSlide]);

  const handleNext = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentSlide((currentSlide - 1 + images.length) % images.length);
  };

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main className="main">
      <section className="slider">
        <div className="slider-wrapper flex w-full overflow-hidden relative">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {images.map((image, index) => (
              <img
                key={index}
                className="slider-img min-w-full object-cover"
                src={image}
                alt={`imagen${index + 1}`}
              />
            ))}
          </div>
          <button
            className="slider-btn slider-btn--left absolute h-12 border-none top-1/2 opacity-80 transition duration-300 cursor-pointer left-0 rounded-r-lg"
            onClick={handlePrev}>
            <ArrowLeft />
          </button>
          <button
            className="slider-btn slider-btn--right absolute h-12 border-none top-1/2 opacity-80 transition duration-300 cursor-pointer right-0 rounded-l-lg"
            onClick={handleNext}>
            <ArrowRight />
          </button>
        </div>
      </section>

      <section className="slice triangle flex items-center justify-center w-full h-20 relative bg-primary flex-col">
        <h1 className="text-center text-neutral-light font-light m-0">
          Facilitamos todo para lograr el crecimiento de tu empresa
        </h1>
      </section>

      <div className="container cards">
        <div className="card">
          <div className="img-box">
            <img src={html} alt="Diseño web" />
          </div>
          <div className="content">
            <h2>Diseño web</h2>
            <p>
              Creamos sitios web profesionales con un diseño atractivo y funcionalidades avanzadas adaptadas a sus necesidades específicas.
            </p>
            <a href="categorias/servicios.html">
              <button className="open">Mas Info</button>
            </a>
          </div>
        </div>
        <div className="card">
          <div className="img-box">
            <img src={seo} alt="Desarrollo web" />
          </div>
          <div className="content">
            <h2>Desarrollo web</h2>
            <p>
              Podemos definir el Desarrollo Web como el proceso de creación de un sitio web, una aplicación o un software.
            </p>
            <a href="categorias/servicios.html">
              <button className="open">Mas Info</button>
            </a>
          </div>
        </div>
        <div className="card">
          <div className="img-box">
            <img src={plantillas} alt="Plantillas Web" />
          </div>
          <div className="content">
            <h2>Plantillas Web</h2>
            <p>
              Ofrecemos más de 1000 plantillas para elegir, garantizando que encuentre el diseño perfecto que se ajuste a la identidad de su marca.
            </p>
            <a href="categorias/servicios.html">
              <button className="open">Mas Info</button>
            </a>
          </div>
        </div>
        <div className="card">
          <div className="img-box">
            <img src={marketing} alt="Marketing y Publicidad" />
          </div>
          <div className="content">
            <h2>Marketing y Publicidad</h2>
            <p>
              Optimizamos su sitio web para mejorar su ranking en motores de búsqueda, aumentando su visibilidad y atrayendo más tráfico.
            </p>
            <a href="categorias/servicios.html">
              <button className="open">Mas Info</button>
            </a>
          </div>
        </div>
      </div>

      <section className="section-informacionweb">
        <div className="columnas">
          <div className="column ">
            <img className="iconos" src={desarrolloWeb} alt="Diseño y Desarrollo Web Profesional"/>
            <h4>Diseño y Desarrollo Web Profesional</h4>
            <p>Creamos sitios web profesionales con un diseño atractivo y funcionalidades avanzadas adaptadas a sus necesidades específicas.</p>
          </div>
          <div className="column">
            <img className="iconos" src={plantillasWeb} alt="Amplia Selección de Plantillas"/>
            <h4>Amplia Selección de Plantillas</h4>
            <p>Ofrecemos más de 1000 plantillas para elegir, garantizando que encuentre el diseño perfecto que se ajuste a la identidad de su marca.</p>
          </div>
          <div className="column">
            <img className="iconos" src={rrss} alt="Noticias Dinámicas mediante RSS"/>
            <h4>Noticias Dinámicas mediante RSS</h4>
            <p>Integramos feeds RSS para actualizar automáticamente su sitio con las últimas noticias y contenido relevante.</p>
          </div>
          <div className="column">
            <img className="iconos" src={seoSvg} alt="Optimización para SEO"/>
            <h4>Optimización para SEO</h4>
            <p>Optimizamos su sitio web para mejorar su ranking en motores de búsqueda, aumentando su visibilidad y atrayendo más clientes potenciales.</p>
          </div>
          <div className="column hidden md:block">
            <img className="iconos" src={blog} alt="Diseño Responsive para Tablet y Móvil"/>
            <h4>Diseño Responsive para Tablet y Móvil</h4>
            <p>Nuestros diseños se adaptan a la perfección en dispositivos móviles y tablets, garantizando una excelente experiencia de usuario en cualquier plataforma.</p>
          </div>
          <div className="column hidden md:block">
            <img className="iconos" src={accesibilidad} alt="Accesibilidad de Todos los Usuarios"/>
            <h4>Accesibilidad de Todos los Usuarios</h4>
            <p>Nos aseguramos de que su sitio web sea accesible para todos los usuarios, cumpliendo con los estándares de accesibilidad web.</p>
          </div>
          <div className="column hidden md:block">
            <img className="iconos" src={ampliaPlantillas} alt="Woocommerce para 20 Productos"/>
            <h4>Woocommerce para 20 Productos</h4>
            <p>Integramos Woocommerce para gestionar hasta 20 productos, facilitando el comercio electrónico en su sitio.</p>
          </div>
          <div className="column hidden md:block">
            <img className="iconos" src={pasarela} alt="Pasarela de Pago con Todos los Métodos"/>
            <h4>Pasarela de Pago con Todos los Métodos</h4>
            <p>Incorporamos pasarelas de pago seguras para transacciones sin complicaciones en su sitio web.</p>
          </div>
        </div>
      </section>

      <div className="container-accordion">
        <section className="accordion w-[1100px]">
          <h1>PREGUNTAS FRECUENTES</h1>
          <div className="accordion-item">
            <div className="accordion-item-header " onClick={() => toggleAccordion(0)}>
              <span>¿Por qué debería elegir sus servicios de diseño web?</span>
            </div>
            {activeIndex === 0 && (
              <div className="accordion-item-content px-4 py-2">
                <p>Nuestro equipo de diseñadores web crea sitios web personalizados y atractivos que se adaptan a sus necesidades específicas. Nos enfocamos en brindar una excelente experiencia de usuario y en optimizar su sitio para motores de búsqueda.</p>
              </div>
            )}
          </div>
          <div className="accordion-item">
            <div className="accordion-item-header" onClick={() => toggleAccordion(1)}>
              <span>¿Qué tipo de plantillas web ofrecen?</span>
            </div>
            {activeIndex === 1 && (
              <div className="accordion-item-content px-4 py-2">
                <p>Ofrecemos una amplia selección de plantillas web para diferentes industrias y estilos. Todas nuestras plantillas son totalmente personalizables y están diseñadas para ser responsive, asegurando que su sitio se vea genial en cualquier dispositivo.</p>
              </div>
            )}
          </div>
          <div className="accordion-item">
            <div className="accordion-item-header" onClick={() => toggleAccordion(2)}>
              <span>¿Cómo pueden ayudarme a mejorar el SEO de mi sitio web?</span>
            </div>
            {activeIndex === 2 && (
              <div className="accordion-item-content px-4 py-2">
                <p>Nuestro equipo de expertos en SEO utiliza las mejores prácticas para optimizar su sitio web y mejorar su clasificación en los motores de búsqueda. Nos enfocamos en la investigación de palabras clave, la optimización del contenido y la construcción de enlaces para aumentar la visibilidad de su sitio.</p>
              </div>
            )}
          </div>
          <div className="accordion-item">
            <div className="accordion-item-header" onClick={() => toggleAccordion(3)}>
              <span>¿Qué incluye su servicio de marketing y publicidad?</span>
            </div>
            {activeIndex === 3 && (
              <div className="accordion-item-content px-4 py-2">
                <p>Nuestros servicios de marketing y publicidad incluyen la creación de campañas personalizadas para promocionar su negocio en línea. Utilizamos estrategias efectivas para aumentar el tráfico a su sitio web, generar leads y mejorar la conversión de ventas.</p>
              </div>
            )}
          </div>
        </section>
      </div>
      <div className="card-container">
        <h1 className="card-p">QUE OPINAN NUESTROS CLIENTES</h1>
        <div className="reseñas-container">
          <div className="reseñas">
            <div className="star-rating">★★★★★</div>
            <div className="quote">
              <p>Genial, buen servicio, muy profesionales. Muy contentos con esta agencia de marketing.</p>
            </div>
            <div className="image-container">
              <img src={img1} alt="Imagen de perfil" />
              <div className="image-title">Juan Lucas</div>
            </div>
          </div>
          <div className="reseñas">
            <div className="star-rating">★★★☆☆</div>
            <div className="quote">
              <p>My order looked exactly like it did on the site. Despite placing a last-minute order I'm happy.</p>
            </div>
            <div className="image-container">
              <img src={neil} alt="Imagen de perfil" />
              <div className="image-title">Alejandro Martin</div>
            </div>
          </div>
          <div className="reseñas">
            <div className="star-rating">★★★☆☆</div>
            <div className="quote">
              <p>Genial, buen servicio, muy profesionales. Muy contentos con esta agencia de marketing.</p>
            </div>
            <div className="image-container">
              <img src={img3} alt="Imagen de perfil" />
              <div className="image-title">Emilio Lopez</div>
            </div>
          </div>
          <div className="reseñas">
            <div className="star-rating">★★★☆☆</div>
            <div className="quote">
              <p>Genial, buen servicio, muy profesionales. Muy contentos con esta agencia de marketing.</p>
            </div>
            <div className="image-container">
              <img src={img4} alt="Imagen de perfil" />
              <div className="image-title">Laura Sánchez</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
