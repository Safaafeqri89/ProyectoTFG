import { useState } from "react";
import logo from "../assets/logo.png";
import berger from "../assets/icons/header/menu.svg";
import servicio from "../assets/icons/header/servicio.png";
import presupuesto from "../assets/icons/header/presupuesto.png";
import usuario from "../assets/icons/header/usuario.png";
import carro from "../assets/icons/header/carro.png";
import telefono from "../assets/icons/header/telefono.png";
import { Link } from "react-router-dom";
import Form from "./Form";
import "./styles/Header.css";

//componente nav
export default function Nav() {
   // Estado para controlar la visibilidad del formulario de presupuesto
  const [isFormOpen, setIsFormOpen] = useState(false);
// Función para alternar la visibilidad del formulario
  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='bg-primary sticky top-0 w-full z-1000 h-20 header'>
      <section className='flex justify-between items-center text-primary xl:px-20 py-2'>
        <div className='ml-20 logo-wrapper'>
          <a href='../home.html'>
            <img
              className='w-50 h-14 cursor-pointer transition-transform duration-200 hover:scale-105'
              src={logo}
              alt='logo'
            />
          </a>
        </div>
        <div className='xl:hidden block'>
          <img
            className='w-7 h-10 cursor-pointer'
            src={berger}
            alt='menu lateral'
            onClick={toggleNavbar}
          />
        </div>
        <div className='hidden xl:block'>
          <div className='opciones-header flex items-center gap-5'>
            <div className='relative'>
              <Link
                to='/'
                className='text-neutral-light text-sm font-extrabold no-underline flex items-center gap-1 cursor-pointer transition-colors duration-150 hover:text-accent'>
                <p>Inicio</p>
              </Link>
            </div>

            <div className='border-l border-neutral-light h-4'></div>

            <div className='relative'>
              <Link
                to='servicios'
                className='text-neutral-light text-sm font-extrabold no-underline flex items-center gap-1 cursor-pointer transition-colors duration-150 hover:text-accent'>
                <div className='relative flex gap-1'>
                  <img className='w-5 h-5' src={servicio} alt='Servicios' />
                  Servicios
                  <div className='absolute hidden bg-accent min-w-70 text-xs z-1'>
                    <Link
                      to='#'
                      className='block p-3 text-neutral-light hover:bg-primary'>
                      Inicio
                    </Link>
                    <Link
                      to='#'
                      className='block p-3 text-neutral-light hover:bg-primary'>
                      Diseño
                    </Link>
                    <Link
                      to='#'
                      className='block p-3 text-neutral-light hover:bg-primary'>
                      Publicidad
                    </Link>
                    <Link
                      to='#'
                      className='block p-3 text-neutral-light hover:bg-primary'>
                      Marketing
                    </Link>
                  </div>
                </div>
              </Link>
            </div>

            <div className='border-l border-neutral-light h-4'></div>

            <div className='relative'>
              <Link
                to='#'
                className='text-neutral-light text-sm font-extrabold no-underline flex items-center gap-1 cursor-pointer transition-colors duration-150 hover:text-accent'
                onClick={toggleForm}>
                <img className='w-5 h-5' src={presupuesto} alt='presupuesto' />
                <p>Pedir Presupuesto</p>
              </Link>
            </div>

            <div className='border-l border-neutral-light h-4'></div>

            <div className='relative'>
              <Link
                to='/login'
                className='text-neutral-light text-sm font-extrabold no-underline flex items-center gap-1 cursor-pointer transition-colors duration-150 hover:text-accent'>
                <img className='w-5 h-5' src={usuario} alt='identificate' />
                <p>Identifícate</p>
              </Link>
            </div>

            <div className='border-l border-neutral-light h-4'></div>

            <div className='relative'>
              <Link
                to='#'
                className='text-neutral-light text-sm font-extrabold no-underline flex items-center gap-1 cursor-pointer transition-colors duration-150 hover:text-accent'>
                <img className='w-5 h-5' src={carro} alt='compra' />
              </Link>
            </div>

            <div className='border-l border-neutral-light h-4'></div>

            <div className='relative'>
              <a
                href='tel:+34631558660'
                className='text-neutral-light text-sm font-extrabold no-underline flex items-center gap-1 cursor-pointer transition-colors duration-150 hover:text-accent'>
                <img className='w-5 h-5' src={telefono} alt='contacto' />
                <p>631558660</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Menu hamburgesa */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute  left-52 top-0 inset-x-0 p-2 w-72 transition transform origin-top-right md:hidden`}>
        <div className='rounded-lg shadow-lg ring-1  h-[100vh] ring-black ring-opacity-5 bg-[#2850be] divide-y-2 divide-gray-400'>
          <div className='pt-5 pb-6 px-5'>
            <div className='flex items-center justify-between'>
              <div></div>
              <div className='-mr-2'>
                <button
                  type='button'
                  onClick={toggleNavbar}
                  className='inline-flex items-center justify-center p-2 rounded-md  bg-yellow-500 text-gray-400 hover:text-white hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                
                  <svg
                    className='h-6 w-6 text-white'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className='mt-6'>
              <div className='grid grid-cols-1 gap-7'>
                <Link
                  to='/'
                  className='mx-2 text-gray-300 hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-base font-medium'>
                  Home
                </Link>

                <Link
                  to='/Servicios'
                  className='flex text-gray-300 hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-base font-medium'>
                  <img
                    className='w-5 h-5 mx-2'
                    src={servicio}
                    alt='Servicios'
                  />
                  Servicios
                </Link>
                <Link
                  to='/login'
                  className='flex text-gray-300 hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-base font-medium'>
                  <img
                    className='w-5 h-5 mx-2'
                    src={usuario}
                    alt='identificate'
                  />
                  Identifícate
                </Link>
                <button
                  onClick={toggleForm}
                  className='text-gray-300 hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-base font-medium flex itemes-end'>
                  {" "}
                  <img
                    className='w-5 h-5 mx-2'
                    src={presupuesto}
                    alt='presupuesto'
                  />
                  Pedir Presupuesto
                </button>
                <Link
                  to='/login'
                  className='flex text-gray-300 hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-base font-medium'>
                  <img className='w-5 h-5 mx-2' src={telefono} alt='contacto' />
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isFormOpen && <Form toggleForm={toggleForm} />}
    </nav>
  );
}
