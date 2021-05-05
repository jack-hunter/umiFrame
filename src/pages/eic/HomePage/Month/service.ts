/*
 * @FilePath: \eic_frontend\src\pages\eic\HomePage\Month\service.ts
 * @Author: hunter
 * @Date: 2021-04-15 18:43:32
 * @LastEditors: hunter
 * @LastEditTime: 2021-04-15 19:29:21
 */

import { request } from 'umi';

// 获取月数据
export const retrieveMonthService = (params?: any) => {
  return request(`${API_PREFIX}/web/declarePool/monthStatistical`, {
    params,
  });
};
