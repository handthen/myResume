import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react'
import App from '@/views/App'
export default function Index() {
  const route = createBrowserRouter(
    [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/:userId',
        element: <App />,
      },
    ],
    {
      basename: '/',
    }
  )

  return <RouterProvider router={route} />
}
