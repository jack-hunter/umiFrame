/*
 * @FilePath: \eic_frontend\src\layouts\Sider\index.tsx
 * @Author: hunter
 * @Date: 2021-04-12 11:11:53
 * @LastEditors: hunter
 * @LastEditTime: 2021-04-15 18:25:23
 */

import { control } from '@/access';
import model, { createAction } from '@/pages/model/model';
import type { Route } from '@/types/Route';
import { Layout, Menu } from 'antd';
import { useEffect, useState } from 'react';
import { history, useAccess, useDispatch, useSelector } from 'umi';

const { Sider } = Layout;

/**
 * 获取一级菜单在整个权限树的下标，从而遍历二级
 * @param masterRoutes 整个路由下的项目路由
 * @param path 想要寻找的一级菜单路径
 */
export const getSecondPathIndex = (masterRoutes: { routes: Route[] }, path: string) => {
  let index = 0;
  masterRoutes.routes.forEach((item: Route, i: number) => {
    if (item.path === path) {
      index = i;
    }
  });
  return index;
};

/**
 * 获取二级权限菜单
 * @param routes 整个路由
 * @param flattenTree flatten的权限树
 * @param path 想要寻找的一级菜单路径
 */
export const getSecondMenu = (routes: any, flattenTree: object, path: string) => {
  const masterRoutes = routes.find(
    (item: { component: any }) => item.component === '@/layouts/index',
  );
  const index = getSecondPathIndex(masterRoutes, path);
  const secondRoutes: Route[] = [];
  masterRoutes.routes?.[index]?.routes?.forEach((item: Route) => {
    if (!control) {
      secondRoutes.push(item);
    } else if (item.path && flattenTree.hasOwnProperty(item.path)) {
      secondRoutes.push(item);
    }
  });
  return secondRoutes;
};

export default () => {
  const [menu, setMenu] = useState<Route[]>([]);
  const dispatch = useDispatch();

  // 获取权限菜单
  const { flattenTree } = useAccess();

  // 获取当前二级菜单的路径
  const { childrenPath, path, panes } = useSelector((state: any) => state[model.namespace]);

  useEffect(() => {
    setMenu(getSecondMenu(ROUTES, flattenTree, path));
  }, [history.location.pathname, childrenPath]);

  return (
    <>
      {menu.length > 0 && (
        <Sider width={200} className="-l-Sider">
          <Menu
            mode="inline"
            selectedKeys={[childrenPath]}
            style={{ height: '100%', borderRight: 0 }}
          >
            {menu.map((item: Route) => {
              return (
                <Menu.Item
                  key={item.path}
                  onClick={() => {
                    // 判断是否追加标签页
                    let flag = false;
                    const newPanes = [...panes];
                    newPanes.forEach((pane: { childrenPath: string }) => {
                      if (pane.childrenPath === item.path) {
                        flag = true;
                      }
                    });
                    if (!flag) {
                      newPanes.push({
                        path,
                        childrenPath: item.path,
                        title: item.title,
                      });
                    }

                    dispatch(createAction('update', { childrenPath: item.path, panes: newPanes }));
                    history.push(item.path);
                  }}
                >
                  {item.title}
                </Menu.Item>
              );
            })}
          </Menu>
        </Sider>
      )}
    </>
  );
};
