import type { Worker } from "@/typings/actionTypes";
import type { State } from "@/typings/storeType"
import { getStoreSlice, getWacthEffect } from "@/utils"
const worker: Worker<State['counter']> = {
    state: { count: 0 },
    effect: {
        *asyncAdd({ callback }, { call, put }) {
            const data = yield call(asyncFn)
            yield put({ type: 'add', payload: +new Date() })
            callback && callback(data)
        }
    },
    reducer: {
    }
}


export default getStoreSlice(worker)

export const countWatch = getWacthEffect(worker, 'counter')



function asyncFn() {
    return new Promise<number[]>((resolve, reject) => {
        setTimeout(() => {
            resolve([1])
        }, 3000)
    })
}