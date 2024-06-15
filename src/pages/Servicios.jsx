import "../components/styles/Servicios.css";
import Diseño from "../assets/img/servicios/img1.jpeg";
import Publicidad from "../assets/img/servicios/img2.jpg";
import Marketing from "../assets/img/servicios/img3.jpg";
import google from "../assets/img/servicios/img4.jpg";
import servicio1 from "../assets/img/servicios/img5.jpg";
import servicio2 from "../assets/img/servicios/img6.jpeg";
export default function Servicios() {
  const data = [
    {
      id: 1,
      nombre: "Diseño Web",
      precio: 500,
      imagen: Diseño,
      descripcion: "Diseño de páginas web para tu negocio.El mercadeo digital o marketing digital es el componente de la mercadotecnia que utiliza internet y tecnologías digitales en línea",
    },
    {
      id: 2,
      nombre: "Publicidad",
      precio: 300,
      imagen: Publicidad,
      descripcion: "Publicidad para tu negocio.El mercadeo digital o marketing digital es el componente de la mercadotecnia que utiliza internet y tecnologías digitales en línea",
    },
    {
      id: 3,
      nombre: "Marketing",
      precio: 200,
      imagen: Marketing,
      descripcion: "Marketing para tu negocio.El mercadeo digital o marketing digital es el componente de la mercadotecnia que utiliza internet y tecnologías digitales en línea",
    },
    {
      id: 4,
      nombre: "googel Web",
      precio: 500,
      imagen: google,
      descripcion: "Diseño de páginas web para tu negocio.El mercadeo digital o marketing digital es el componente de la mercadotecnia que utiliza internet y tecnologías digitales en línea",
    },
    {
      id: 5,
      nombre: "Publicidad",
      precio: 300,
      imagen: servicio1,
      descripcion: "Publicidad para tu negocio.El mercadeo digital o marketing digital es el componente de la mercadotecnia que utiliza internet y tecnologías digitales en línea",
    },{
      id: 6,
      nombre: "Marketing",
      precio: 200,
      imagen: servicio2,
      descripcion: "Marketing para tu negocio.El mercadeo digital o marketing digital es el componente de la mercadotecnia que utiliza internet y tecnologías digitales en línea",
    },
   
  ];

  return (
    <>
      <main>
        <div className='slice triangle'>
          <h1>Contrata un Servicio y Aumenta tu Venta por Internet</h1>
        </div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className='grid gap-5 lg:grid-cols-3 sm:max-w-sm  lg:max-w-full '>
          {data.map((servicio) => (
            <div key={servicio.id} className='max-w-xs mx-auto '>
              <img
                src={servicio.imagen}
                alt=''
                className='object-cover object-center w-full rounded-t-md h-72'
              />
              <div className='flex flex-col justify-between py-6 '>
                <div className=''>
                  <h2 className='text text-2xl  md:text-3xl pb-4 font-semibold tracking-wide'>
                    {servicio.nombre}
                  </h2>
                  <p className='textp pb-4 font-semibold dark:text-gray-800'>
                   {servicio.descripcion}
                  </p>
                </div>
                <button
                  type='button '
                  className='contratar text-white flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md'>
                  CONTRATAR
                </button>
              </div>
            </div>
          ))}
        </div>

        </div>
      </main>
    </>
  );
}
