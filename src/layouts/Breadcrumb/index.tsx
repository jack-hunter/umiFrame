/*
 * @FilePath: \eic_frontend\src\layouts\Breadcrumb\index.tsx
 * @Author: hunter
 * @Date: 2021-04-12 11:13:02
 * @LastEditors: hunter
 * @LastEditTime: 2021-04-15 19:20:28
 */

import model, { createAction } from '@/pages/model/model';
import { Tabs } from 'antd';
import React, { useEffect } from 'react';
import { history, useAccess, useDispatch, useSelector } from 'umi';
import './index.less';

const { TabPane } = Tabs;

export const findPathName = (flattenTree: any, path: string) => {
  return flattenTree[path].name;
};

export default () => {
  const dispatch = useDispatch();
  // 获取权限菜单
  const { flattenTree } = useAccess();

  const { childrenPath, panes, path } = useSelector((state: any) => state[model.namespace]);

  // 更新标签页
  useEffect(() => {
    const newPanes = [...panes];
    if (newPanes.findIndex((item) => item.childrenPath === childrenPath) === -1) {
      newPanes.push({
        childrenPath,
        path,
        title: findPathName(flattenTree, childrenPath),
      });
    }
    dispatch(createAction('update', { panes: newPanes }));
  }, [childrenPath]);

  return (
    <div className="-l-Breadcrumb">
      <Tabs
        hideAdd
        onChange={(e) => {
          const arr = e.split(':');
          dispatch(createAction('update', { childrenPath: arr[0], path: arr[1] }));
          history.push(arr[0]);
        }}
        activeKey={`${childrenPath}:${path}`}
        type="editable-card"
        onEdit={(e: any) => {
          const arr = e.split(':');
          if (arr[0] !== history.location.pathname) {
            const index = panes.findIndex(
              (item: { childrenPath: string }) => item.childrenPath === arr[0],
            );
            const newPanes = [...panes];
            newPanes.splice(index, 1);
            dispatch(createAction('update', { panes: newPanes }));
          }
        }}
      >
        {panes.map((pane: { title: string; path: string; childrenPath: string }) => (
          <TabPane tab={pane.title} key={`${pane.childrenPath}:${pane.path}`}></TabPane>
        ))}
      </Tabs>
    </div>
  );
};
