import React, { useEffect, useState } from 'react'
import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"


export default function Auth(props: any) {
    const count = useSelector((state: any) => state.counter.count)
    return (
        <>
            {count ? props['children'] : <Navigate to='/404' replace={true}></Navigate>}
        </>
    )
}
