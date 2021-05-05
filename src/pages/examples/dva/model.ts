/*
 * @FilePath: \eic_frontend\src\pages\examples\dva\model.ts
 * @Author: hunter
 * @Date: 2021-04-14 10:04:24
 * @LastEditors: hunter
 * @LastEditTime: 2021-04-14 10:06:23
 */
import type { AnyModel } from '@/interfaces/dva';
import { baseModel, createActionFactory } from '@/interfaces/dva';
import modelExtend from 'dva-model-extend';
import { uniqueId } from 'lodash-es';

const model: AnyModel = {
  namespace: uniqueId('example'),
  state: {
    status: 'DvaExample',
    number: 1,
  },
  effects: {
    *fetch({ payload }, { put }) {
      yield put({ type: 'save', payload });
    },
  },
};

export const createAction = createActionFactory.bind(model);

export default modelExtend(baseModel, model);
