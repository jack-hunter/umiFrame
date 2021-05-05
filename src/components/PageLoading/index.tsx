/*
 * @FilePath: \eic_frontend\src\component\PageLoading\index.tsx
 * @Author: hunter
 * @Date: 2021-04-12 14:39:37
 * @LastEditors: hunter
 * @LastEditTime: 2021-04-12 14:42:37
 */

import { Spin } from 'antd';
import React from 'react';

const style: React.CSSProperties = {
  height: 'calc(100vh - 64px)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const PageLoading = () => (
  <div style={style}>
    <Spin size="large" />
  </div>
);

// loading components from code split
// https://umijs.org/plugin/umi-plugin-react.html#dynamicimport
export default PageLoading;
