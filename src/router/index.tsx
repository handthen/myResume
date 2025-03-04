import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react'
import router from './routeConfig'

export default function Index() {
  const route = createBrowserRouter(router, {
    basename: '/',
  })

  return <RouterProvider router={route} />
}
