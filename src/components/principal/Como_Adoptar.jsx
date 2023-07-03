import { Link } from 'react-router-dom'
import { lazy } from 'react';
import como_adoptar from '../../assets/img/como_adoptar.webp'
const Caja_Principal = lazy(()=>import('../Caja_Principal'))
const Btn_Link = lazy(()=>import('../Btn_Link'))

const Como_Adoptar = () => {
    const info = {
        titulo: 'Cómo Adoptar',
        texto: 'Aquí te explicamos el proceso de adopción de un perro de' +
            'nuestra asociación. Desde la selección del perro hasta' +
            'los requisitos necesarios para adoptar.' +
            '¡Anímate a darle una segunda oportunidad a un peludo amigo!',
        imagen: como_adoptar,
        alt: 'Imagen de un perro sacando la lengua',
        bg: 'bg-secondary',
        dir: true
    };
    const botonInfo = {
        location: '/adopcion',
        text: 'Adopciones'
    }
    return (
        <>
            <div className='bg-secondary '>
                <Caja_Principal {...info} />
                <Btn_Link {...botonInfo} />
            </div>
        </>
    );
};

export default Como_Adoptar