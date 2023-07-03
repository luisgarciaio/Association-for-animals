import { lazy } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import "react-lazy-load-image-component/src/effects/blur.css";
import facebook from '../assets/icon/facebook.svg'
import instagram from '../assets/icon/instagram.svg'
import whatsapp from '../assets/icon/whatsapp.svg'
import email from '../assets/icon/email.svg'
const Caja_Principal = lazy(()=>import('./Caja_Principal'))

const Contactanos = () => {
    const info = {
        titulo: 'Contáctanos',
    }
    return (
        <>
            <Caja_Principal {...info} />
            <div className=' flex flex-col items-center justify-center md:flex-row md:h-64'>
                <div className='animate-slide-out flex flex-col items-center justify-center p-5 text-xl'>
                    <p>Por medio de nuestro facebook: </p>
                    <LazyLoadImage effect="blur" src={facebook} alt="Icono de facebook" />
                    <p>[Tu facebook aquí]</p>
                </div>
                <div className='animate-slide-out flex flex-col items-center justify-center p-5 text-xl'>
                    <p>Por medio de nuestro instagram: </p>
                    <LazyLoadImage effect="blur" src={instagram} alt="Icono de instagram" />
                    <p>[Tu instagram aquí]</p>
                </div>
                <div className='animate-slide-out flex flex-col items-center justify-center p-5 text-xl'>
                    <p>Por medio de nuestro whatsapp: </p>
                    <LazyLoadImage effect="blur" src={whatsapp} alt="Icono de whatsapp" />
                    <p>[Tu whatsapp aquí]</p>
                </div>
                <div className='animate-slide-out flex flex-col items-center justify-center p-5 text-xl'>
                    <p>Por medio de nuestro email: </p>
                    <LazyLoadImage effect="blur" src={email} alt="Icono de email" />
                    <p>[Tu email aquí]</p>
                </div>
            </div>
        </>
    )
}

export default Contactanos