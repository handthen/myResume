import React, { Dispatch, SetStateAction } from 'react'
export interface Props {
  children?: React.ReactNode
  width?: number
  height?: number
  defaultColor?: string
  color?: string
  inputColor?: string
  onChange?: (e: Object) => any
}

export interface Context {
  store: Store
  setStore: Dispatch<SetStateAction<Store>>
}
export interface Store {
  inputColor?: string
  opacity: number | string
  pointX: number
  pointY: number
  color: string
  colorCache: Map<string, object>
  width: number
  height: number
  defaultColor: string
}

export interface config {
  width: number
  height: number
}
