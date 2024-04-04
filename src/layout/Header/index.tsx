import React from "react"
import styles from "./index.module.scss"
export default (): React.ReactElement => {
    return (
        <div className={styles.header}>
            <div className={styles.language}>中/En</div>
        </div>
    )
}