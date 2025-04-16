import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/routes.jsx'
import './index.css'
// import App from './App.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<div className="p-10 text-center">Chargement...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>,
)
