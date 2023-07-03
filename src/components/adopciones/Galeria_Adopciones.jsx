import { lazy } from 'react'
import perro_tronco from '../../assets/img/como_adoptar.webp'
const Caja_Adopciones = lazy(()=>import('./Caja_Adopciones'))

const Galeria_Adopciones = () => {
    const info = [
        {
        imagen: perro_tronco,
        alt: 'Descripcion de la imagen 1',
        nombre:'Prueba',
        edad:'2 años',
        detalles:'pruebaDetalles'
        },        
        {
        imagen: perro_tronco,
        alt: 'Descripcion de la imagen 2',
        nombre:'Prueba2',
        edad:'5 años',
        detalles:'pruebaDetalles2'
        },        
        {
        imagen: perro_tronco,
        alt: 'Descripcion de la imagen 3',
        nombre:'Prueba3',
        edad:'10 años',
        detalles:'pruebaDetalles3'
        },
        {
        imagen: perro_tronco,
        alt: 'Descripcion de la imagen 1',
        nombre:'Prueba',
        edad:'2 años',
        detalles:'pruebaDetalles'
        },        
        {
        imagen: perro_tronco,
        alt: 'Descripcion de la imagen 2',
        nombre:'Prueba2',
        edad:'5 años',
        detalles:'pruebaDetalles2'
        },        
        {
        imagen: perro_tronco,
        alt: 'Descripcion de la imagen 3',
        nombre:'Prueba3',
        edad:'10 años',
        detalles:'pruebaDetalles3'
        },
        {
        imagen: perro_tronco,
        alt: 'Descripcion de la imagen 1',
        nombre:'Prueba',
        edad:'2 años',
        detalles:'pruebaDetalles'
        },        
        {
        imagen: perro_tronco,
        alt: 'Descripcion de la imagen 2',
        nombre:'Prueba2',
        edad:'5 años',
        detalles:'pruebaDetalles2'
        },        
        {
        imagen: perro_tronco,
        alt: 'Descripcion de la imagen 3',
        nombre:'Prueba3',
        edad:'10 años',
        detalles:'pruebaDetalles3'
        }
    ]
return (
    <Caja_Adopciones info={info} />
)
}

export default Galeria_Adopciones