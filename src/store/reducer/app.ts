import type { Worker } from '@/typings/actionTypes'
import { getStoreSlice, getWacthEffect, extend } from '@/utils'
import { getResume } from '@/api/app'
import type { State } from '@/typings/storeType'

const worker: Worker<State['app']> = {
  state: {
    resumeConfig: {},
    theme: {
      themeColor: '#273f75',
    },
    sideOpen: false,
  },
  effect: {
    *getResume({ success, fail, payload }, { put }) {
      let data: any = null
      if (payload === '9527') {
        data = yield getResume({ id: payload })
      } else {
        data = {
          data: {
            content: yield require('../../../v.json'),
          },
          code: 200,
        }
      }

      if (data.code != 200) {
        return fail && fail(data)
      }

      yield put({
        type: 'app/set_resume_config',
        payload: typeof data.data.content == 'string' ? JSON.parse(data.data.content) : data.data.content,
      })
      success && success(data)
    },
  },
  reducer: {
    set_sideOpen({ payload }, state) {
      return {
        sideOpen: payload,
      }
    },
    set_resume_config({ payload }, state) {
      return {
        resumeConfig: payload,
      }
    },
    set_theme_color({ payload }, state) {
      return {
        theme: {
          ...payload,
        },
      }
    },
  },
}

export default [getStoreSlice(worker, 'app'), getWacthEffect(worker, 'app')]
