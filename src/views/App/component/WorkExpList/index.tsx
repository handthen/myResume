import React from "react";
import type { Resume } from "@/typings/configType"

export default (props: Resume): React.ReactElement => {
    return (
        <div>
            <div className="text-line">工作经历</div>
        </div>
    )
}