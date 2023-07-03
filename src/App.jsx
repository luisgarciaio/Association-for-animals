import { React, lazy, Suspense } from 'react'

import { Outlet } from 'react-router-dom'
const Loading = lazy(() => import("./components/Loading"))
const Header = lazy(() => import('./components/Header'))
const Footer = lazy(() => import('./components/Footer'))
const ErrorBoundary = lazy(() => import('./components/ErrorBoundary'))
const App = () => {
  return (
    <>
        <Suspense fallback={<Loading />}>
          <Header />
          <Outlet />
          <Footer />
        </Suspense>
    </>
  )
}

export default App