/*
 * @FilePath: \eic_frontend\src\pages\eic\HomePage\Month\model.ts
 * @Author: hunter
 * @Date: 2021-04-15 18:51:51
 * @LastEditors: hunter
 * @LastEditTime: 2021-04-15 18:56:35
 */

import type { AnyModel } from '@/interfaces/dva';
import { baseModel, createActionFactory } from '@/interfaces/dva';
import modelExtend from 'dva-model-extend';
import { uniqueId } from 'lodash-es';

const model: AnyModel = {
  namespace: uniqueId('month'),
  state: {},
  effects: {
    *fetch({ payload }, { put }) {
      yield put({ type: 'save', payload });
    },
  },
};

export const createAction = createActionFactory.bind(model);

export default modelExtend(baseModel, model);
