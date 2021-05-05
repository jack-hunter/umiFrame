/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import { isPlainObject } from 'lodash-es';
import { Action, AnyObject } from './presetReducer.d';

const NAMESPACE_SEP = '/';

// 预设 reducers
const set = (state: any, action: Action) => action.payload;
const update = (state: AnyObject, action: Action<AnyObject>) => ({
  ...state,
  ...action.payload,
});
const push = (state: any[], action: Action) => {
  const copy = [...state];
  copy.push(...action.payload);
  return copy;
};
const pop = (state: any[], action: Action) => {
  if (state.length === 0) {
    return state;
  }
  const copy = [...state];
  copy.pop();
  return copy;
};
const unshift = (state: any[], action: Action) => {
  const copy = [...state];
  copy.unshift(...action.payload);
  return copy;
};
const shift = (state: any[], action: Action) => {
  if (state.length === 0) {
    return state;
  }
  const copy = [...state];
  copy.shift();
  return copy;
};
const splice = (state: any[], action: Action) => {
  const copy = [...state];
  const start = action.payload[0] || 0;
  const rest = action.payload.slice(1);
  copy.splice(start, ...rest);
  return copy;
};
const reverse = (state: any[], action: Action) => {
  const copy = [...state];
  copy.reverse();
  return copy;
};
const sort = (state: any[], action: Action) => {
  const copy = [...state];
  copy.sort(action.payload);
  return copy;
};

export const createPresetReducer = (defaultState = {}) => {
  Object.freeze(defaultState);

  let presetReducers;
  if (Array.isArray(defaultState)) {
    presetReducers = {
      push,
      pop,
      unshift,
      shift,
      splice,
      reverse,
      sort,
      // concat,
      // slice,
    };
  } else if (isPlainObject(defaultState)) {
    presetReducers = {
      update,
    };
  }

  presetReducers = {
    ...presetReducers,
    set,
    reset: () => defaultState,
  };

  return presetReducers;
};

export const createReducers = (reducers, defaultState) => {
  const namespace = Object.keys(reducers)[0]!.split(NAMESPACE_SEP).slice(0, -1).join('');
  if (namespace) {
    const presets = createPresetReducer(defaultState);
    const presetReducers = Object.keys(presets).reduce((acc, cur) => {
      // hook
      // 修复effects里面调用增强put，take时prefixType时无法匹配type的问题
      reducers[`${namespace}${NAMESPACE_SEP}${cur}`] = presets[cur];
      return {
        ...acc,
        [`${namespace}${NAMESPACE_SEP}${cur}`]: presets[cur],
      };
    }, {});
    return { ...presetReducers, ...reducers };
  }
  return reducers;
};

export default createPresetReducer;
