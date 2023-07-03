import { LazyLoadImage } from 'react-lazy-load-image-component'
import "react-lazy-load-image-component/src/effects/blur.css";
import perroPrincipal from '../../assets/img/perros_atardecer.webp'


const Presentacion_Nombre = () => {
    return (
        <section>
            <div className=' w-full h-full bg-base-100 flex flex-col md:flex-row items-center justify-center'>
                <div className='  flex flex-col items-start justify-center md:w-full'>
                    <h1 className='font-bold text-3xl md:text-5xl m-3 animate-slide-out'>
                        Protegiendo y
                        <br />cuidando a los
                        <br /> animales de la calle
                    </h1>
                    <h2 className='text-2xl md:text-3xl m-3 animate-slide-out'>Asociación [Nombre de tu asociación aquí]</h2>
                </div>
                <div className=' relative h-[550px] w-full flex items-center justify-center'>
                    <div className='animate-slide-out absolute  bottom-[90px] right-1 w-40 h-40 bg-primary rounded-full
                    md:top-16 md:left-10
                    '></div>
                    <div className='animate-slide-out  absolute bottom-10 left-2 w-20 h-20 bg-primary rounded-full'></div>
                    <LazyLoadImage effect="blur" className='animate-slide-out relative  rounded-[50%] h-[350px] w-[350px] md:w-[450px] md:h-[450px]' src={perroPrincipal} alt="Un perro con un tronco jugando en el agua" />
                </div>
            </div>
        </section>
    )
}

export default Presentacion_Nombre