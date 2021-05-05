/*
 * @FilePath: \eic_frontend\src\pages\model\model.tsx
 * @Author: hunter
 * @Date: 2021-04-15 09:57:19
 * @LastEditors: hunter
 * @LastEditTime: 2021-04-15 17:13:51
 */

import type { AnyModel } from '@/interfaces/dva';
import { baseModel, createActionFactory } from '@/interfaces/dva';
import modelExtend from 'dva-model-extend';
import { uniqueId } from 'lodash-es';

const model: AnyModel = {
  namespace: uniqueId('layouts'),
  state: {
    path: '/HomePage',
    childrenPath: '/HomePage',
    childrenRoutes: [],
    panes: [{ path: '/HomePage', childrenPath: '/HomePage', title: '首页' }],
  },
  effects: {
    *fetch({ payload }, { put }) {
      yield put({ type: 'save', payload });
    },
  },
};

export const createAction = createActionFactory.bind(model);

export default modelExtend(baseModel, model);
