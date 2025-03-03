import React, { useMemo } from "react"
import { useSelector } from "react-redux"
import Main from "./Main"
import Footer from "./Footer"
import Header from "./Header"
import type { State } from "@/typings/storeType"
import {ConfigProvider} from "antd"

export default function Layout({ children }): React.ReactElement {
    const themeConfig = useSelector((state: State) => state.app.theme)
    const theme = useMemo(() => {
        return Object.keys(themeConfig).reduce((t, k) => {
            if (themeConfig[k]) {
                t[`--${k}`] = themeConfig[k]
            }
            return t
        }, {})
    }, [themeConfig])
    ConfigProvider.config({
        theme:{
            primaryColor:themeConfig.themeColor
        }
    })
    return (
        <div style={{ ...theme }}>
            {children}
        </div>
    )
}

export {
    Header,
    Main,
    Footer,
    Layout
}