import React from "react"
import { useSelector } from "react-redux"
import styles from "./index.module.scss"
import type { State } from "@/typings/storeType"

export default (): React.ReactElement => {
    return (
        <div className={styles.footer}></div >
    )
}