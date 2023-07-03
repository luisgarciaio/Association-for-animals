import { lazy, Suspense } from 'react'
const Galeria_Adopciones = lazy(()=>import ('../components/adopciones/Galeria_Adopciones'))
const Loading = lazy(() => import("../components/Loading"))

const Adopcion = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
      <Galeria_Adopciones />
      </Suspense>
    </>
  )
}

export default Adopcion