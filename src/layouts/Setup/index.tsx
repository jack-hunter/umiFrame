/*
 * @FilePath: \eic_frontend\src\layouts\Setup\index.tsx
 * @Author: hunter
 * @Date: 2021-04-15 11:27:00
 * @LastEditors: hunter
 * @LastEditTime: 2021-04-15 19:27:36
 */

import { UserOutlined } from '@ant-design/icons';
import { Dropdown, Menu } from 'antd';
import React from 'react';
import Clock from './Clock';
import './index.less';

export default () => {
  const menu = (
    <Menu>
      <Menu.Item disabled>设置</Menu.Item>
      <Menu.Item disabled>换肤</Menu.Item>
    </Menu>
  );

  return (
    <div className="-l-Setup">
      <Clock></Clock>
      <span className="user">
        <Dropdown overlay={menu}>
          <span>
            <UserOutlined />
            <span>用户</span>
          </span>
        </Dropdown>
      </span>
    </div>
  );
};
