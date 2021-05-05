/*
 * @FilePath: \eic_frontend\src\utils\accessControl.ts
 * @Author: hunter
 * @Date: 2021-04-13 14:56:29
 * @LastEditors: hunter
 * @LastEditTime: 2021-04-13 15:04:56
 */

import type { Route } from '@/types/Route';

// 组装权限对象
export const flattenAccess = (item: any, acc: any): object => {
  if (Array.isArray(item)) {
    return item.reduce((acc2: any, item2: any) => {
      return flattenAccess(item2, acc2);
    }, acc);
  }
  if (item.children && item.children.length > 0) {
    return item.children.reduce((acc2: any, item2: any) => {
      acc[item.menu.menupath] = item.menu;
      return flattenAccess(item2, acc2);
    }, acc);
  }
  acc[item.menu.menupath] = item.menu;
  return acc;
};

// 组装路由对象
export const flattenRoutes = (routerTree: Route[]): object => {
  return routerTree.reduce((acc: any, item: Route) => {
    if (item.routes && item.routes.length > 0) {
      return { ...acc, ...flattenRoutes(item.routes) };
    }
    const { routes, ...rest } = item;
    if (item.path) {
      acc[item.path] = rest;
    }
    return acc;
  }, {});
};
