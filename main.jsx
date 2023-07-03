import { createRoot } from 'react-dom/client'
import App from './src/App'
import './src/style/index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Children } from 'react'
import Principal from './src/pages/Principal'
import Donacion from './src/pages/Donacion'
import Adopcion from './src/pages/Adopcion'
import Nosotros from './src/pages/Nosotros'
import ErrorBoundary from './src/components/ErrorBoundary'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Principal />,
                errorElement: <ErrorBoundary/>
            },
            {
                path: '/nosotros',
                element: <Nosotros/>,
                errorElement: <ErrorBoundary/>
            },,
            {
                path: '/donacion',
                element: <Donacion/>,
                errorElement: <ErrorBoundary/>
            },
            {
                path: '/adopcion',
                element: <Adopcion/>,
                errorElement: <ErrorBoundary/>
            },
            {
                path: "*",
                element: <Principal />,
                errorElement: <ErrorBoundary/>
              },
        ]
    }
])


const root = createRoot(document.getElementById('app'))
root.render(
    <RouterProvider router={router} />
    // <App />
)