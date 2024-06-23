import type { Worker } from '@/typings/actionTypes';
import { getStoreSlice, getWacthEffect } from '@/utils';
import type { State } from '@/typings/storeType';

const worker: Worker<State['app']> = {
  state: {
    resumeConfig: {},
    theme: {
      themeColor: 'rgb(0,0,255)',
      primaryColor: 'red',
    },
  },
  effect: {
    *getResume({ callback }, { put }) {
      const data = yield require('../../../resume.json');
      yield put({
        type: 'app/set_resume_config',
        payload: data,
      });
      callback && callback(data);
    },
  },
  reducer: {
    set_resume_config({ payload }, state) {
      return {
        resumeConfig: payload,
      };
    },
    set_theme_color({ payload }, state) {
      return {
        theme: {
          ...payload,
        },
      };
    },
  },
};

export default [getStoreSlice(worker, 'app'), getWacthEffect(worker, 'app')];
