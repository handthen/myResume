import React, { ComponentType } from "react"
import Auth from "@/components/Auth"

export default function importComponent(path: Promise<{ default: ComponentType<any>; }>, auth?: boolean) {
    const LazeCom = React.lazy(() => path)
    if (auth) {
        return <Auth><LazeCom /></Auth>
    } else {
        return <LazeCom />
    }

}