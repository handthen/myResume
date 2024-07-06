import React, { useState, useContext, useEffect, useRef, useCallback, useMemo } from 'react'
import style from '../index.module.scss'
import useEvent from '@/hooks/useEvent'
import { Context } from './Provider'
import { RgbReg, toRgb, toScale16 } from '@/utils'

const rgbMap = {
  0: [255, 0, 0],
  1: [255, 255, 0],
  2: [0, 255, 0],
  3: [0, 255, 255],
  4: [0, 0, 255],
  5: [255, 0, 255],
  6: [255, 0, 0],
}

const ToolConfig = {
  criceSize: 12,
  showBlock: 30,
}

export default (): React.ReactElement => {
  const context = useContext(Context)
  function changeInput(e) {
    console.log(e.target.value)
  }
  return (
    <div className={style.tool}>
      <div className="flex jbetween">
        <div>
          <SilderColor />
          <SilderOpacity />
        </div>
        <div className={style.showBlock} style={{ background: context.store.color, width: ToolConfig.showBlock * 0.85, height: ToolConfig.showBlock * 0.85 }}></div>
      </div>
      <input value={toScale16(context.store.inputColor)} className="color-input" onChange={changeInput} />
    </div>
  )
}

function SilderColor(): React.ReactElement {
  const { setStore, store } = useContext(Context)
  const [position, setPosition] = useState({
    x: 0,
    targetX: 0,
    oldX: 0,
  })
  useEvent('#slider1', { mousedown })
  useEvent('#crice1', { mousedown })
  const bgStyle = useMemo(() => {
    let bg = ''
    for (const key in rgbMap) {
      if (Object.prototype.hasOwnProperty.call(rgbMap, key)) {
        const val = rgbMap[key]
        bg += `rgb(${val[0]},${val[1]},${val[2]}),`
      }
    }
    return bg.slice(0, -1)
  }, [])

  function mousedown(e: MouseEvent) {
    const { clientX, offsetX, target } = e
    const clientWidth = (target as HTMLElement)!.clientWidth
    const ranger = offsetX / clientWidth

    requestAnimationFrame(() => {
      setPosition((state) => {
        if ((target as HTMLElement).id !== 'crice1') {
          state.x = offsetX - 8
        }
        state.oldX = state.x
        return { ...state, targetX: clientX }
      })
      setStore((state) => {
        const color = computeOffeetByColor(ranger, state.opacity)
        return { ...state, color, inputColor: color }
      })
    })
    document.addEventListener('mouseup', mouseup)
    document.addEventListener('mousemove', mousemove)
  }

  function mousemove(e: MouseEvent) {
    const { clientX } = e
    setPosition((state) => {
      const { targetX, oldX } = state
      let x = clientX - targetX + oldX
      if (x >= store.width - ToolConfig.showBlock - ToolConfig.criceSize) {
        x = store.width - ToolConfig.showBlock - ToolConfig.criceSize
      }
      if (x <= 0) {
        x = 0
      }
      requestAnimationFrame(() => {
        setStore((state) => {
          const ranger = (x + ToolConfig.criceSize / 2) / (state.width - ToolConfig.showBlock)
          const color = computeOffeetByColor(ranger, state.opacity)
          return { ...state, color, inputColor: color }
        })
      })
      return { ...state, x }
    })
  }

  function mouseup(e: MouseEvent) {
    document.removeEventListener('mouseup', mouseup)
    document.removeEventListener('mousemove', mousemove)
  }

  function computeOffeetByColor(range: number, opacity: number | string) {
    opacity = String((+opacity * 255).toFixed())
    const regIndex = (range * 100) / 16.66
    let [i, p = 0] = String(regIndex).split('.') as [string, string]
    const len = Object.keys(rgbMap).length - 1
    if (len == +i) {
      ;(i as unknown as number)--
    }
    const percent = +(0 + '.' + p)
    const startColor: number[] = rgbMap[parseInt(String(i))] || []
    const endColor: number[] = rgbMap[parseInt(String(+i + 1))] || []
    if (!startColor.length || !endColor.length) return store.color
    const red = startColor[0] + (endColor[0] - startColor[0]) * percent
    const green = startColor[1] + (endColor[1] - startColor[1]) * percent
    const blue = startColor[2] + (endColor[2] - startColor[2]) * percent
    return `rgb(${red.toFixed(0)},${green.toFixed(0)},${blue.toFixed(0)},${opacity})`
  }
  const criceStyle = {
    left: position.x,
    width: ToolConfig.criceSize,
    height: ToolConfig.criceSize,
  }

  const silderStyle = {
    width: store.width - ToolConfig.showBlock,
    background: `linear-gradient(to right, ${bgStyle})`,
  }

  return (
    <div className={style.slider} id="slider1" style={silderStyle}>
      <div className={style.crice} id="crice1" style={criceStyle}></div>
    </div>
  )
}

function SilderOpacity(): React.ReactElement {
  const { setStore, store } = useContext(Context)
  const [barColor, setBarColor] = useState(store.color)
  const storeRefColor = useRef(store.color)
  const [position, setPosition] = useState({
    x: 0,
    targetX: 0,
    oldX: 0,
  })
  // const cacheMousedown = useCallback(mousedown, [barColor])

  useEvent('#slider2', { mousedown })
  useEvent('#crice2', { mousedown })
  useEffect(() => {
    setBarColor(store.color)
    const color = store.color
    if (color.indexOf('rgb') != -1) {
      setBarColor(color.replace(`,${(+store.opacity * 255).toFixed()}`, ''))
    } else {
      setBarColor(color.slice(0, 7))
    }
    storeRefColor.current = store.color
  }, [store.color])

  function mousedown(e: MouseEvent) {
    const { clientX, offsetX, target } = e
    const clientWidth = (target as HTMLElement)!.clientWidth
    const ranger = offsetX / clientWidth
    const computColor = computRangerColor(ranger.toFixed(2), storeRefColor.current)
    requestAnimationFrame(() => {
      setStore((state) => ({ ...state, color: computColor, inputColor: computColor, opacity: ranger.toFixed(2) }))
      setPosition((state) => {
        if ((target as HTMLElement).id !== 'crice2') {
          state.x = clientWidth - offsetX - 7
        }
        state.oldX = state.x
        return { ...state, targetX: clientX }
      })
    })
    document.addEventListener('mouseup', mouseup)
    document.addEventListener('mousemove', mousemove)
  }
  function mousemove(e: MouseEvent) {
    const { clientX, target } = e
    setPosition((state) => {
      const { targetX, oldX } = state
      let x = targetX - clientX + oldX
      let prx = x
      if (x >= store.width - ToolConfig.showBlock - ToolConfig.criceSize) {
        x = store.width - ToolConfig.showBlock - ToolConfig.criceSize
        prx = store.width - ToolConfig.showBlock
      }
      if (x <= 0) {
        x = 0
        prx = 0
      }
      requestAnimationFrame(() => {
        const ranger = 1 - prx / (store.width - ToolConfig.showBlock)
        const computColor = computRangerColor(ranger.toFixed(2), storeRefColor.current)
        setStore((state) => {
          return { ...state, color: computColor, inputColor: computColor, opacity: ranger.toFixed(2) }
        })
      })
      return { ...state, x }
    })
  }

  function mouseup(e: MouseEvent) {
    document.removeEventListener('mouseup', mouseup)
    document.removeEventListener('mousemove', mousemove)
  }

  function computRangerColor(opaction: string, color: string) {
    let computColor = ''
    if (color.indexOf('rgb') != -1) {
      const macthColor = color.match(RgbReg)?.slice(1, 5)
      if (macthColor) {
        macthColor[3] = String((+opaction * 255).toFixed())
        computColor = `rgba(${macthColor.join(',')})`
      }
    } else {
      let ob16 = Number((+opaction * 255).toFixed()).toString(16)
      ob16 = ob16.length == 1 ? '0' + ob16 : ob16
      computColor = color.replace(/^(#)([0-9a-zA-Z]{6}).*$/, '$1$2' + ob16)
    }
    return toScale16(computColor)
  }
  const criceStyle = {
    right: position.x,
    background: store.color,
    width: ToolConfig.criceSize,
    height: ToolConfig.criceSize,
  }
  return (
    <div className={style.barg} style={{ width: store.width - ToolConfig.showBlock }} id="slider2">
      <div className={style.opacity} style={{ background: `linear-gradient(to right, transparent, ${barColor})` }}>
        <div className={style.crice} id="crice2" style={criceStyle}></div>
      </div>
    </div>
  )
}
