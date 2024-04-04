
import React, { useMemo } from "react";
import type { Resume } from "@/typings/configType"

export default (props: Resume): React.ReactElement => {
    const { profile } = props
    const { name } = profile!
    const data = useMemo(() => Object.keys(profile!), [profile])
    return (
        <div>
            <h2>{name}</h2>
            <div className="flex flex-warp">
                {data.map(key => {
                    if (profile![key] && key != 'name') {
                        return (
                            <div className="flex flex3 mt-10" key={key}>
                                <i></i>
                                <span>{profile![key]}</span>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}