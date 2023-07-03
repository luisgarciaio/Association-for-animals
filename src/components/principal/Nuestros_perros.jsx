import { lazy } from 'react'
import dos_perros from '../../assets/img/dos_perros.webp'
const Caja_Principal = lazy(()=>import('../Caja_Principal'))

const Nuestros_perros = () => {
    const info = {
        titulo: 'Nuestros Perros en Adopción',
        texto:'En esta sección podrás conocer a los perros que '+
        'están buscando un hogar. Todos ellos han sido '+
        'rescatados de la calle y están listos para ser '+
        'adoptados. ¡Ayúdanos a encontrarles una familia amorosa!',
        imagen: dos_perros,
        alt: 'Imagen de dos perros mirando a la camara',
        bg:'bg-base-100',
        dir:false
      };
    return (
        <Caja_Principal {...info}/>
    )
}

export default Nuestros_perros