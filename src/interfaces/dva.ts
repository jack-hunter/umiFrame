/*
 * @FilePath: \eic_frontend\src\interfaces\dva.ts
 * @Author: hunter
 * @Date: 2021-04-14 10:02:25
 * @LastEditors: hunter
 * @LastEditTime: 2021-04-14 10:03:19
 */
import type { Effect, Model } from 'dva';
import type { AnyAction, Reducer } from 'redux';

export type CreateAction<S = AnyAction> = (type: string, payload: any) => S;

export interface AnyModel extends Model {
  createAction?: CreateAction;
  reducers?: Record<string, Reducer>;
  effects?: Record<string, Effect>;
}

let index = 0;
export const baseModel: AnyModel = {
  namespace: `@@default-model-${index++}`,
  reducers: {
    getNamespace: (state) => state,
  },
  createAction: function createAction(type, payload) {
    if (type.indexOf(this.namespace) !== 0) {
      // eslint-disable-next-line no-param-reassign
      type = `${this.namespace}/${type}`;
    }
    return {
      type,
      payload,
    };
  },
};

declare const actionType: ['set', 'update', 'reset'];

export function createActionFactory(
  this: AnyModel,
  type: typeof actionType[number],
  payload?: any,
) {
  if (type.indexOf(this.namespace) !== 0) {
    // eslint-disable-next-line no-param-reassign
    // @ts-ignore
    type = `${this.namespace}/${type}`;
  }
  return {
    type,
    payload,
  };
}
