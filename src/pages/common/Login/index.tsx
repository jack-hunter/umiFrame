/*
 * @FilePath: \eic_frontend\src\pages\common\Login\index.tsx
 * @Author: hunter
 * @Date: 2021-04-09 16:04:25
 * @LastEditors: hunter
 * @LastEditTime: 2021-04-15 09:53:54
 */

import { Login } from '@tsintergy/role';
import React from 'react';
import { history, useModel } from 'umi';

const HOST = `${API_PREFIX}/api`;
window.baseHost = HOST;
export default () => {
  const { refresh } = useModel('@@initialState');

  const handleSuccessLogin = () => {
    // window.location.href = `${API_PREFIX}/HomePage`;
    history.push('/HomePage');
    refresh();
  };
  return (
    <Login
      onSuccess={handleSuccessLogin}
      host={HOST}
      apiUrl={`web/logincontroller/login`}
      title="能源产业链检测与兼管系统"
    />
  );
};
