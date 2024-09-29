import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { components } from './api/concept.ts'

const queryClient = new QueryClient()

const router = createBrowserRouter(components.map((c) => {
  return {
    path: c.route,
    element: <c.component />,
    id: c.name
  } as RouteObject
}))

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
)
