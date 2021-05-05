/*
 * @FilePath: \eic_frontend\src\layouts\index.tsx
 * @Author: hunter
 * @Date: 2021-04-12 11:04:54
 * @LastEditors: hunter
 * @LastEditTime: 2021-04-15 19:02:18
 */

import '@/style/color.less';
import '@/style/reset.less';
import { Layout } from 'antd';
import React from 'react';
import Breadcrumb from './Breadcrumb';
import Header from './Header';
import './index.less';
import Sider from './Sider';

export default (props: { children: React.PureComponent }) => {
  return (
    <Layout className="-l-layouts">
      <Header />
      <Layout>
        <Sider />
        <Layout>
          <Breadcrumb />
          <div className="content">{props.children}</div>
        </Layout>
      </Layout>
    </Layout>
  );
};
