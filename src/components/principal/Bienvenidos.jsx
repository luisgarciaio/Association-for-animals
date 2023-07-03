import { lazy } from 'react'
import elefante from '../../assets/img/elefante.webp'
const Caja_Principal = lazy(()=>import('../Caja_Principal'))

const Bienvenidos = () => {
    const info = {
      titulo: 'Bienvenidos a nuestra asociación',
      texto:'Somos una asociación dedicada al rescate y ' +
        'adopción de perros que se encuentran en situación ' +
        'de calle. Nuestro objetivo es brindarles un hogar ' +
        'seguro y amoroso. ¡Ayúdanos a hacer la ' +
        'diferencia en la vida de estos animales!',
      imagen: elefante,
      alt: 'Imagen de un elefante',
      bg:'bg-secondary',
      dir:true
    };
    
    return (
      <>
        <Caja_Principal {...info} />
      </>
    );
  };

export default Bienvenidos