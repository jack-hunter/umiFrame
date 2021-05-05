/*
 * @FilePath: \eic_frontend\src\access.ts
 * @Author: hunter
 * @Date: 2021-04-12 15:07:24
 * @LastEditors: hunter
 * @LastEditTime: 2021-04-15 18:01:02
 */

import { flattenAccess, flattenRoutes } from '@/utils/accessControl';

type menu = {
  description: string;
  id: string;
  menupath: string;
  name: string;
  parentId: string;
  rel: string;
  targetType: string;
  sort: number;
  type: 0 | 1 | 2;
};

type children = {
  check: boolean;
  children: [];
  menu?: menu;
}[];

const noRequestPaths = ['/Login'];

export const control = false;
export default (
  initialState: any,
): {
  menuTree: children;
  controlRoute: any[];
  flattenTree: object;
  flattenRoute: any;
} => {
  let menuTree: children = [];
  const controlRoute: any[] = [];
  let flattenTree = {};
  let flattenRoute: any = [];

  const requestBasePath = noRequestPaths.some((p: string) => window.location.hash.includes(p)); // 不使用cas情况下 部分页面不需要请求数据

  if (!requestBasePath) {
    try {
      const res = initialState?.menuTree;

      if (res?.data?.children) {
        // 获取权限树
        menuTree = res?.data?.children || [];

        // 打平权限树及路由
        flattenTree = menuTree.reduce((acc: any, item: any) => flattenAccess(item, acc), {});
        flattenRoute = flattenRoutes(ROUTES);

        // 静态路由key，即必须渲染的路由
        const staticRouteKey = [
          '/Exception/403',
          '/Exception/404',
          '/Exception/500',
          '/Exception/Incompatible',
          '/Login',
          '/Role',
        ];

        // 获取权限控制路由
        Object.keys(flattenTree)
          .concat(staticRouteKey)
          .forEach((item) => {
            if (flattenRoute[item]) {
              controlRoute.push(flattenRoute[item]);
            }
          });
      }
    } catch (error) {
      console.error('[debug]: getInitialState -> error', error);
    }
  }

  return {
    menuTree,
    controlRoute,
    flattenTree,
    flattenRoute,
  };
};
