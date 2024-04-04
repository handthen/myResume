import React from "react"
import styles from "./index.module.scss"

export default ({ children }): React.ReactElement => {

    return (
        <div className={styles.tag}>
            {children}
        </div>
    )
}