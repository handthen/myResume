import React, { createContext, useState, useCallback, useMemo } from 'react'
import type { Props, Context as ContextType, Store } from '../indexType'
import { toScale16, toRgb } from '@/utils'

const intStore = {
  pointX: 0,
  pointY: 0,
  color: '',
  opacity: 1,
  colorCache: new Map(),
  width: 220,
  height: 160,
  inputColor: '',
  defaultColor: '',
}
export const Context = createContext<ContextType>(null!)

const Provider = (props: Props): React.ReactElement => {
  const { width = 220, height = 160, defaultColor = '#1677FF' } = props
  intStore.width = width
  intStore.height = height
  if (defaultColor.indexOf('rgb') != -1) {
    intStore.color = defaultColor
  } else {
    intStore.color = toRgb(defaultColor)
  }
  intStore.inputColor = toScale16(intStore.color)

  const [store, setStore] = useState<Store>({ ...intStore })

  const value = useMemo(() => ({ store, setStore }), [store])
  return <Context.Provider value={value}>{props.children}</Context.Provider>
}

export default Provider
