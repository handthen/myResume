export type Action = {
  type: string
  payload?: any
  success?: noop
  fail?: noop
}

export type actionParam = {
  payload?: any
  success?: noop
  fail?: noop
}

export interface ActionFn {
  [string: string]: (params: actionParam) => Action
}

export interface Worker<T> {
  state: T
  effect: {
    [key: string]: (action: Action, effects) => Generator
  }
  reducer: {
    [key: string]: (action: Action, state: T) => any
  }
}

export type noop = (...args: any) => any
