import { useRoutes } from "react-router-dom"
import React from "react"
import App from "@/views/App"
export default function Index() {
    const route = useRoutes([
        {
            path: "/",
            element: <App />,
        }
    ])

    return route
}