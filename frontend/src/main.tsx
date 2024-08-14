import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './globals.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.tsx'
import MyFlights from './pages/Myflights.tsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/myflights",
        element: <MyFlights />
    }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>,
)
