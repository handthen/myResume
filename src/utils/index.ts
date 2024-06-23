import type { Action, Worker } from '@/typings/actionTypes'
import { takeEvery } from 'redux-saga/effects'
import * as effects from 'redux-saga/effects'
import domToImage from './domToImage'

export const RgbReg = /^rgb[a]?\((\d{1,3}),(\d{1,3}),(\d{1,3}),?(.*)?\)/
export const B16Reg = /^#([a-zA-Z0-9]{2})([a-zA-Z0-9]{2})([a-zA-Z0-9]{2})([a-zA-Z0-9]{2})?/
const pathNameReg = /\/(\w*\.ts)$/

export function getStoreSlice<T>(worker: Worker<T>, fix?: string) {
  return function (state = worker.state, action: Action) {
    const reducer = worker.reducer
    const type = action.type
    const [path1, path2]: string[] = type.split('/')
    /** {type:'app'} */
    const flag1 = fix === path1 && path2
    const flag2 = !path2 && !fix
    if (flag1 || flag2) {
      const path = flag2 ? path1 : path2
      return reducer[path] ? extend(state as object, reducer[path].call(worker.state, action, worker.state) as object) : state
    } else {
      return state
    }
  }
}

export function getWacthEffect<T>(worker: Worker<T>, fix?: string) {
  return function* () {
    const actionTypes = Object.keys(worker.effect)
    for (let i = 0; i < actionTypes.length; i++) {
      const action = actionTypes[i]
      const actionType = fix ? fix + '/' + action : action
      if (typeof worker.effect[action] === 'function') {
        const effectFn = function* (...args: any) {
          yield worker.effect[action].call(worker.state, args[0], effects)
        }
        yield takeEvery(actionType, effectFn as (action: Action) => any)
      }
    }
  }
}

export function print() {
  // domToImage(window)
  //   .toPng(document.body, {
  //     width: window.innerWidth,
  //     height: window.innerHeight,
  //     scale: 2,
  //   })
  //   .then((res) => {
  //     let link = document.createElement('a');
  //     link.style.display = 'none';
  //     link.download = +new Date() + '.png';
  //     console.log(res);
  //     link.href = res;
  //     document.body.appendChild(link);
  //     link.click();
  //     link = null!;
  //   });
  window.print()
}

export function getType(target: any) {
  return Object.prototype.toString.call(target).slice(8, -1)
}

export function toScale16(str: string) {
  if (str[0] == '#') return str
  const match = str
    .match(RgbReg)
    ?.slice(1, 5)
    .reduce((t, c) => {
      if (c) {
        let s = Number(c).toString(16)
        s = s.length == 1 ? '0' + s : s
        t += s
      }
      return t
    }, '#')

  return match
}

export function toRgb(str: string) {
  if (!str || str.indexOf('rgb') != -1) return str
  const matchColor = str.match(B16Reg)?.slice(1, 5) ?? []
  const RgbVal = matchColor
    .reduce((t, c, i) => {
      if (c) {
        const s = parseInt(c, 16)
        t += s + ','
      }
      return t
    }, '')
    .slice(0, -1)

  const Rgb = matchColor[3] ? 'rgba' : 'rgb'
  return Rgb + '(' + RgbVal + ')'
}
// rgb(0,0,0,1)
export function getPathName(path: string): string {
  const name = path.match(pathNameReg)![1]
  return name
}

export function extend(source: object | Array<any>, ...args: (object | Array<any> | WeakMap<any, any>)[]) {
  if (!source) {
    source = {}
  }
  const stype = getType(source)
  if (['Object', 'Array'].indexOf(stype) == -1) return {}
  let weakmap = args.slice(-1)[0] as WeakMap<any, any>
  weakmap instanceof WeakMap ? args.pop() : (weakmap = new WeakMap())
  for (let i = 0; i < args.length; i++) {
    const currentTarget = args[i]
    if (weakmap.has(currentTarget)) continue
    const ttype = getType(currentTarget)
    weakmap.set(currentTarget, currentTarget)
    if (['Object', 'Array'].indexOf(ttype) == -1) continue
    if (ttype == 'Array' && stype == 'Array') return (source as []).concat(currentTarget as [])
    const keys = Object.keys(currentTarget)
    keys.forEach((key) => {
      const sv = source[key]
      const tv = currentTarget[key]
      if (getType(sv) == 'Object' && getType(tv) == 'Object') {
        source[key] = extend(sv, tv)
      } else {
        source[key] = tv
      }
    })
  }

  return { ...source }
}

