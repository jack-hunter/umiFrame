/*
 * @FilePath: \eic_frontend\src\services\Role\services.ts
 * @Author: hunter
 * @Date: 2021-04-12 15:09:45
 * @LastEditors: hunter
 * @LastEditTime: 2021-04-12 15:42:23
 */

import { request } from 'umi';

// 获取权限树
export function retrieveMenuTreeTreeApi() {
  return request(`web/sysMenuManage/menu/userMenuTree`, {
    prefix: '',
  });
}
