import type { Action, Worker } from "@/typings/actionTypes";
import { getStoreSlice, getWacthEffect } from "@/utils";
import type { State } from "@/typings/storeType"
const worker: Worker<State['app']> = {
    state: {
        resumeConfig: {},
        theme: {
            themeColor: 'rgb(0,0,255)',
            'primaryColor': 'red',
        }
    },
    effect: {

    },
    reducer: {
        set_resume_config({ payload }, state) {
            return {
                ...state,
                resumeConfig: payload
            }
        },
        set_theme_color({ payload }, state) {
            return {
                ...state,
                theme: {
                    ...state.theme,
                    ...payload
                }
            }
        }
    }
}


export default getStoreSlice(worker, 'app')

export const appWatch = getWacthEffect(worker, 'app')
