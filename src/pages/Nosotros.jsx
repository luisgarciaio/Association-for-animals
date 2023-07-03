import { Suspense, lazy } from "react"
const Sobre_Nosotros = lazy(() => import("../components/nosotros/Sobre_Nosotros"))
const Loading = lazy(() => import("../components/Loading"))


const Nosotros = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Sobre_Nosotros />
      </Suspense>
    </>
  )
}

export default Nosotros