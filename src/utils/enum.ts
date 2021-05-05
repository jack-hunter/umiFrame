/*
 * @FilePath: \eic_frontend\src\utils\enum.ts
 * @Author: hunter
 * @Date: 2021-04-12 14:59:56
 * @LastEditors: hunter
 * @LastEditTime: 2021-04-12 15:03:38
 */

import { getCommonEnumRequest } from '@/services/Enum/services';

/**
 * 请求获取公共枚举
 * 自由场站详情信息列表
 * 系统参数
 */
export const getCommonEnum = async () => {
  const [unitsManageEnum, typeManageEnum] = await getCommonEnumRequest();

  return {
    unitsManageEnum,
    typeManageEnum,
  };
};
