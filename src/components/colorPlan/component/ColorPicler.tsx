import React, { useRef, useEffect, useState, useContext } from "react";
import useEvent from "@/hooks/useEvent"
import style from "../index.module.scss"
import { Context } from "./Provider"
import { toScale16, toRgb } from "@/utils"
import type { Props } from "../indexType"

const requestAnimationFrame = window.requestAnimationFrame || function (cb) { setTimeout(cb, 16) }

export default (props: Props): React.ReactElement => {
    const { setStore, store } = useContext(Context)
    const { width, height, defaultColor, color } = store
    const [position, setPosition] = useState({
        x: -8,
        y: -8,
        targetX: 0,
        targetY: 0,
        oldX: 0,
        oldY: 0
    })
    const canvas = useRef<HTMLCanvasElement>(null)
    const ctxRef = useRef<CanvasRenderingContext2D>()
    useEvent("#color_picler", { mousedown: changeColor })
    useEvent("#point", { mousedown })
    useEffect(() => {
        if (canvas.current) {
            ctxRef.current = canvas.current!.getContext('2d', { willReadFrequently: true }) as CanvasRenderingContext2D
            init()
        }
        return () => { }
    }, [])
    useEffect(() => {
        init()
    }, [store.color, store.defaultColor])

    const init = () => {
        draw()
    }

    const draw = () => {
        const ctx = ctxRef.current!
        const { width, height } = canvas.current as HTMLCanvasElement
        const g = ctx.createLinearGradient(width / 2, 0, width / 2, height)!
        g.addColorStop(0, "#fff")
        g.addColorStop(1, "#000")
        ctx.fillStyle = g as CanvasGradient
        ctx.fillRect(0, 0, width, height);
        const g2 = ctx.createLinearGradient(0, 0, width, 0)!
        g2.addColorStop(0, "transparent")
        g2.addColorStop(0.06, "transparent")
        // g2.addColorStop(0.9, "#1677FF")
        g2.addColorStop(1, color)
        ctx.fillStyle = g2 as CanvasGradient
        ctx.fillRect(0, 0, width, height);
    }

    function changeColor(e: MouseEvent) {
        const { offsetX, offsetY } = e
        saveColor(offsetX, offsetY)
        setPosition(state => {
            return { ...state, x: offsetX - 8, y: offsetY - 8 }
        })
        mousedown(e)
    }
    function mousedown(e: MouseEvent) {
        const { clientX, clientY } = e
        setPosition(state => {
            state.oldX = state.x
            state.oldY = state.y
            return { ...state, targetX: clientX, targetY: clientY }
        })
        document.addEventListener('mouseup', mouseup)
        document.addEventListener('mousemove', mousemove)
    }

    function mousemove(e: MouseEvent) {
        const { clientX, clientY } = e
        setPosition(state => {
            const { targetX, targetY, oldX, oldY } = state
            let x = clientX - targetX + oldX
            let y = clientY - targetY + oldY
            if (x >= width - 8) {
                x = width - 8
            }
            if (x <= -8) {
                x = -8
            }
            if (y >= height - 8) {
                y = height - 8
            }
            if (y <= -8) {
                y = -8
            }
            saveColor(x, y)
            return { ...state, x, y }
        })
    }
    function mouseup(e: MouseEvent) {
        document.removeEventListener('mouseup', mouseup)
        document.removeEventListener('mousemove', mousemove)
    }

    const saveColor = (x: number, y: number, colorType?: string) => {
        try {
            const ctx = ctxRef.current!
            const { colorCache } = store
            const data = ctx.getImageData(x, y, 1, 1)?.data
            const rgba = `rgb(${data[0]},${data[1]},${data[2]},${data[3]})`
            colorCache.set(rgba, { x, y })
            requestAnimationFrame(() => {
                const color = {
                    rgba,
                    b16: toScale16(rgba)
                }
                setStore(state => ({ ...state, pointX: x, pointY: y }))
                props.onChange && props.onChange(color)
            })

            return rgba
        } catch (e) {
            console.log(e)
        }

    }

    return (
        <div className={style.canvasBox}>
            <canvas id="color_picler" ref={canvas} width={width} height={height} ></canvas >
            <div id="point" className={style.point} style={{ top: position.y, left: position.x }}></div>
        </div>
    )
}
