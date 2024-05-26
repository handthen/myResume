import { combineReducers } from 'redux';
import { getPathName } from '@/utils';

type wacthType = () => any;
const reducers = {};
const WatchsReducer: wacthType[] = [];
// @ts-ignore
const reducersModule = require.context('./', true, /\.ts$/);
reducersModule.keys().forEach((path) => {
  if (path.indexOf('index.ts') == -1) {
    const module: [Object, wacthType] = reducersModule(path).default;
    const pathName = getPathName(path).split('.')[0];
    WatchsReducer.push(module[1]());
    reducers[pathName] = module[0];
  }
});

export default combineReducers(reducers);
export const Watchs = WatchsReducer;
