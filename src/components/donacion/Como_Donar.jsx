import {React, lazy} from 'react'

const Como_Apoyar = lazy(()=>import('../principal/Como_Apoyar'))
const Caja_Principal = lazy(()=>import('../Caja_Principal'))
const Contactanos = lazy(()=>import('../Contactanos'))

const Como_Donar = () => {
    const info = {
        texto:'Por favor, comunicate a travez de nuestras redes sociales',

      };
    return (
        <>
            {/* <Caja_Principal {...info}/> */}

            <div className='bg-secondary flex flex-col items-center justify-center'>
                <Como_Apoyar />
                <Caja_Principal {...info}/>
                <Contactanos/>
            </div>
        </>
    )
}

export default Como_Donar