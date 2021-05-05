/*
 * @FilePath: \eic_frontend\src\services\Enum\services.ts
 * @Author: hunter
 * @Date: 2021-04-12 14:56:08
 * @LastEditors: hunter
 * @LastEditTime: 2021-04-12 15:56:57
 */

import { request } from 'umi';

// 检修-单位枚举
export function retrieveUnitsManageEnumApi() {
  return request(`web/basicDataManage/unitsManage/`, {
    useCache: true,
  });
}

// 检修-设备枚举
export function retrieveTypeManageEnumApi() {
  return request(`web/basicDataManage/typeManage`, {
    useCache: true,
  });
}

// 获取枚举
export function getCommonEnumRequest() {
  return Promise.all([retrieveUnitsManageEnumApi(), retrieveTypeManageEnumApi()]);
}
