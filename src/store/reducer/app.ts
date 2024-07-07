import type { Worker } from '@/typings/actionTypes'
import { getStoreSlice, getWacthEffect, extend } from '@/utils'
import type { State } from '@/typings/storeType'

const worker: Worker<State['app']> = {
  state: {
    resumeConfig: {},
    theme: {
      themeColor: '#273f75',
    },
  },
  effect: {
    *getResume({ callback, payload }, { put }) {
      let data: unknown = null
      if (payload === '9527') {
        data = yield require('../../../resume.json')
      } else {
        data = yield require('../../../v.json')
      }

      yield put({
        type: 'app/set_resume_config',
        payload: data,
      })
      callback && callback(data)
    },
  },
  reducer: {
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
