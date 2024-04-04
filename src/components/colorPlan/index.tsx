import React from "react";
import style from "./index.module.scss"
import ColorPicler from "./component/ColorPicler"
import ColorTool from "./component/ColorTool"
import Provider from "./component/Provider"
import type { Props } from "./indexType"


export default (props: Props): React.ReactElement => {
    return (
        <Provider {...props}>
            <div className={style.plan}>
                <ColorPicler onChange={props.onChange} />
                <ColorTool />
            </div>
        </Provider>
    )
}
