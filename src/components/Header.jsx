import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/icon/logo.svg'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import "react-lazy-load-image-component/src/effects/blur.css";
const ExampleComponent = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    setIsNavOpen(false); // Cerrar el menú al cambiar de ruta
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="font-sans leading-normal tracking-normal">
      <nav className="bg-white/95 flex items-center justify-between flex-wrap p-6 fixed w-full z-10 top-0">
        <div className="animate-slide-out flex items-center justify-normal">
          <Link to='/' ><LazyLoadImage effect="blur" className="w-[55px] h-full" src={logo} alt="Logo de la empresa" /></Link>
        </div>

        <div className=" block lg:hidden">
          <label id="nav-toggle" className={`swap swap-rotate ${isNavOpen ? 'swap-on' : 'swap-off'}`}>
            <input type="checkbox" onChange={toggleNav} />
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 512 512">
              {isNavOpen ? (
                <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
              ) : (
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              )}
            </svg>
          </label>
        </div>

        <div className={`animate-slide-out  w-full flex-grow lg:flex lg:items-center lg:w-auto ${isNavOpen ? '' : 'hidden'}`} id="nav-content">
          <ul className="list-reset lg:flex justify-end flex-1 items-end">
            <li className="mr-3">
              <div className={`${location.pathname === '/' && 'link'} underline-offset-8 hover:link`} ><Link to="/">Home</Link></div>
            </li>
            <li className="mr-3">
              <Link className={`${location.pathname === '/nosotros' && 'link'} underline-offset-8 hover:link`} to="/nosotros">Nosotros</Link>
            </li>
            <li className="mr-3">
              <Link className={`${location.pathname === '/donacion' && 'link'} underline-offset-8 hover:link`} to="/donacion">Donaciones</Link>
            </li>
            <li className="mr-3">
              <Link className={`${location.pathname === '/adopcion' && 'link'} underline-offset-8 hover:link`} to="/adopcion">Adopciones</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Container */}
      <div className="container shadow-lg mx-auto bg-white mt-24 md:mt-18"></div>
    </div>
  );
};

export default ExampleComponent;
