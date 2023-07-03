import { LazyLoadImage } from 'react-lazy-load-image-component'
import "react-lazy-load-image-component/src/effects/blur.css";
const Caja_Principal = ({ titulo, texto, imagen, alt, bg, dir, sizeTitulo,sizeTexto,no_rounded }) => {

  return (
    <section>
      <div className={`${bg}  flex flex-col items-center justify-center
      md:grid md:grid-flow-col 
      `}>
        <div className='px-4 mt-1 animate-slide-out '>
          {titulo && (
            <h2 className={`${sizeTitulo ? sizeTitulo : 'text-3xl md:text-5xl'} font-medium`}>{titulo}</h2>
          )}
          {texto && (
            <p className={`${sizeTexto ? sizeTexto : 'md:text-2xl'} text-start mt-10 leading-6 `}>
              {texto}
            </p>
          )}
        </div>
        {imagen && (
          <div className={`${(dir ) && 'md:col-start-1 rounded-none'} animate-slide-out w-full h-full my-7 rounded-full flex items-center justify-center`}>
            <LazyLoadImage effect="blur" className={`${no_rounded ? 'rounded-none' : 'rounded-[50%]'} h-[350px] w-[350px]`} src={imagen} alt={alt} />
          </div>
        )}
      </div>
    </section>
  );
};

export default Caja_Principal;