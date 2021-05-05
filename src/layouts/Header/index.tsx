/*
 * @FilePath: \eic_frontend\src\layouts\Header\index.tsx
 * @Author: hunter
 * @Date: 2021-04-12 11:08:55
 * @LastEditors: hunter
 * @LastEditTime: 2021-04-15 18:25:08
 */

import { control } from '@/access';
import model, { createAction } from '@/pages/model/model';
import type { Route } from '@/types/Route';
import { Layout, Menu } from 'antd';
import React, { useEffect } from 'react';
import { history, useAccess, useDispatch, useSelector } from 'umi';
import Setup from '../Setup';
import './index.less';

const { Header } = Layout;

export default () => {
  const dispatch = useDispatch();

  // 更新路由的path,childrenPath
  useEffect(() => {
    const obj: { childrenPath: string; path?: string } = {
      childrenPath: history.location.pathname,
    };
    const arr = history.location.pathname.split('/');
    if (arr.length > 2) {
      obj.path = `/${arr[1]}`;
    }
    dispatch(createAction('update', obj));
  }, []);

  // 获取权限菜单
  const access = useAccess();

  // 获取model
  const { path, panes } = useSelector((state: any) => state[model.namespace]);

  // 获取一级权限菜单
  const getFirstMenu = (routes: any) => {
    const masterRoutes = routes.find(
      (item: { component: any }) => item.component === '@/layouts/index',
    );
    const firstRoutes: Route[] = [];
    masterRoutes.routes.forEach((item: Route) => {
      if (!control) {
        firstRoutes.push(item);
      } else if (item.path && access.flattenTree.hasOwnProperty(item.path)) {
        firstRoutes.push(item);
      }
    });
    return firstRoutes;
  };

  const menu = getFirstMenu(ROUTES);

  return (
    <Header className="-l-Header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" selectedKeys={[path]}>
        {menu.map((item) => {
          return (
            <Menu.Item
              key={item.path}
              onClick={() => {
                const obj: {
                  path?: string;
                  childrenPath?: string;
                  childrenRoutes?: Route[];
                  panes: object[];
                } = {
                  path: item.path,
                  childrenPath: '',
                  childrenRoutes: [],
                  panes,
                };

                // 判断是否存在子集路由
                if (item.routes) {
                  obj.childrenPath = item.routes[0]?.path;
                  obj.childrenRoutes = item.routes;
                } else {
                  obj.childrenPath = item.path;
                }

                // 判断是否追加标签页
                let flag = false;
                panes.forEach((pane: { path: string }) => {
                  if (pane.path === obj.path) {
                    flag = true;
                  }
                });
                if (!flag) {
                  obj.panes.push({
                    path: obj.path,
                    childrenPath: obj.childrenPath,
                    title: item.routes?.[0]?.title || item.title,
                  });
                }

                dispatch(createAction('update', obj));
                history.push(obj.childrenPath);
              }}
            >
              {item.title}
            </Menu.Item>
          );
        })}
      </Menu>
      <div className="setup">
        <Setup></Setup>
      </div>
    </Header>
  );
};
