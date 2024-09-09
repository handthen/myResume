import React from "react"
import styles from "./index.module.scss"
import SideTool from "@/components/sideTool"
// eslint-disable-next-line react/display-name
export default ({ children }): React.ReactElement => {

    return (
        <div className={['flex jcenter', styles.main].join(' ')}>
            <div id="print-body" className={styles.context}>
                {children}
            </div>
            {/* <SideTool /> */}
        </div>

    )
}