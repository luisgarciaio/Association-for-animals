import { React, lazy, Suspense } from 'react'
const Presentacion_Nombre = lazy(() => import('../components/principal/Presentacion_Nombre'));
const Bienvenidos = lazy(() => import('../components/principal/Bienvenidos'))
const Nuestros_perros = lazy(() => import('../components/principal/Nuestros_perros'))
const Galeria_perros = lazy(() => import('../components/principal/Galeria_perros'))
const Como_Adoptar = lazy(() => import('../components/principal/Como_Adoptar'))
const Nosotros_Principal = lazy(() => import('../components/principal/Nosotros_Principal'))
const Como_Apoyar = lazy(() => import('../components/principal/Como_Apoyar'))
const Contactanos = lazy(() => import('../components/Contactanos'))
const Loading = lazy(() => import('../components/Loading'))
// import perroPrincipal from '../assets/img/perro_tronco.jpg'


const Principal = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Presentacion_Nombre />
        <Bienvenidos />
        <Nuestros_perros />
        <Galeria_perros />
        <Como_Adoptar />
        <Nosotros_Principal />
        <Como_Apoyar />
        <Contactanos />
      </Suspense>
    </>
  )
}

export default Principal