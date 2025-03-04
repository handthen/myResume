import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react'
import router from './routeConfig'

export default function Index() {
  const route = createBrowserRouter(router, {
    // @ts-ignore
    basename: "/BASENAME",
  })

  return <RouterProvider router={route} />
}
