import { Link } from 'react-router-dom';
import { lazy } from 'react'
const Caja_Principal = lazy(()=>import('../Caja_Principal'))
const Btn_Link = lazy(()=>import('../Btn_Link'))
import dos_personas from '../../assets/img/dos_personas.webp'

const Nosotros_Principal = () => {
  const info = {
    titulo: 'Acerca de nosotros',
    texto: 'Somos una asociación dedicada a brindar refugio, ' +
      'cuidado y amor a los perros de la calle.' +
      'Trabajamos arduamente para rescatar a estos animales' +
      'y encontrarles un hogar donde sean amados y cuidados.',
    imagen: dos_personas,
    alt: 'Imagen de dos personas viendo un celular',
    bg: 'bg-base-100',
    dir: false
  };
  const botonInfo = {
    location: '/nosotros',
    text: 'Nosotros'
  }
  return (
    <>
      <Caja_Principal  {...info} />
      <Btn_Link {...botonInfo} />
    </>
  );
};

export default Nosotros_Principal