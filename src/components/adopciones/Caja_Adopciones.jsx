import { LazyLoadImage } from 'react-lazy-load-image-component'
import "react-lazy-load-image-component/src/effects/blur.css";
const Caja_Adopciones = ({ info }) => {
    return (
        <div className="grid md:grid-cols-3 md:p-10 p-3 gap-4">
            {info.map((item, index) => (
                <div key={index} className="animate-slide-out card w-full bg-base-100 shadow-xl">
                    <figure><LazyLoadImage effect="blur" src={item.imagen} alt={item.alt} /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{item.nombre}</h2>
                        <div className="card-actions justify-end">
                            <details className="collapse collapse-arrow bg-base-200">
                                <summary className="collapse-title text-xl font-medium">Click para saber más</summary>
                                <div className="collapse-content">
                                    <p>{item.detalles}</p>
                                </div>
                            </details>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Caja_Adopciones;
