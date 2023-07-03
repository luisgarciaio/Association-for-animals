import {lazy, Suspense} from 'react'
const Como_Donar = lazy(()=>import  ('../components/donacion/Como_Donar'))
const Loading = lazy(() => import("../components/Loading"))

const Donacion = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
      <Como_Donar />
      </Suspense>
    </>
  )
}

export default Donacion