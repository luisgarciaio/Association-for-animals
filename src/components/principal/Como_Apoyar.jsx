import {React, lazy} from 'react'
import { Link, useLocation } from 'react-router-dom'

const Caja_Principal = lazy(()=>import('../Caja_Principal'))
const Btn_Link = lazy(()=>import('../Btn_Link'))

const Como_Apoyar = () => {
    const location = useLocation()
    const numeroTransferencia = "[########]"
    const titulo = {
        titulo: 'Un hogar para cada animalito',
        sizeTitulo: 'text-3xl'
    }
    const comoApoyar = {
        titulo: 'Cómo apoyar a la asociación?',
        sizeTitulo: 'text-3xl'
    };
    const donacionEfectivo = {
        titulo: 'Donación en efectivo',
        texto: 'Aceptamos donaciones en efectivo en nuestras' +
            ' oficinas principales durante nuestro horario de atención. ' +
            'Estaremos encantados de recibir personalmente su donación' +
            ' y proporcionarle un recibo oficial.',
        sizeTitulo: 'text-3xl',
        sizeTexto: 'text-xl'
    };
    const donacionTransferencia = {
        titulo: 'Transferencia bancaria',
        texto: 'Si prefieres realizar una transferencia bancaria,' +
            ' puedes hacerlo a través de nuestra cuenta bancaria ' +
            numeroTransferencia + '. Por favor, incluye tu nombre ' +
            'y "Donación" como referencia para que podamos identificar tu contribución.',
        sizeTitulo: 'text-3xl',
        sizeTexto: 'text-xl'
    };
    const donacionBienes = {
        titulo: 'Donación de bienes o servicios',
        texto: 'Además de donaciones monetarias, también ' +
            'valoramos las contribuciones en forma de bienes o' +
            ' servicios que puedan beneficiar directamente a ' +
            'nuestra causa. Si tienes algo que te gustaría donar, ' +
            'por favor contáctanos para discutir los detalles y coordinar la entrega.',
        sizeTitulo: 'text-3xl',
        sizeTexto: 'text-xl'
    };
    const donacionAdopta = {
        titulo: 'Adoptando',
        texto: 'Si estás listo/a para dar el paso y abrir tu ' +
            'corazón y tu hogar a un nuevo compañero, te invitamos ' +
            'a explorar los perfiles de nuestros animales disponibles para adopción.',
        sizeTitulo: 'text-3xl',
        sizeTexto: 'text-xl'
    };
    const botonInfo = {
        location: '/donacion',
        text: 'Donaciones'
    }
    return (
        <>
            <div className='bg-secondary text-2xl md:grid md:grid-cols-4  gap-1'>

                <div className='md:col-start-1 col-span-4'><Caja_Principal {...titulo} /></div>
                <div className='mt-4 md:col-start-1 col-span-4'>
                <Caja_Principal {...comoApoyar} />
                </div>
                <div className='md:hidden mt-4 divider'></div>
                <Caja_Principal {...donacionEfectivo} />
                <div className='md:hidden mt-4 divider'></div>
                <Caja_Principal {...donacionTransferencia} />
                <div className='md:hidden mt-4 divider'></div>
                <Caja_Principal {...donacionBienes} />
                <div className='md:hidden mt-4 divider'></div>
                <Caja_Principal {...donacionAdopta} />
                {location.pathname !== '/donacion' &&
                <div className=' md:col-start-4'>
                    <Btn_Link {...botonInfo} />
                </div>
                }
            </div>
        </>
    );
};
export default Como_Apoyar