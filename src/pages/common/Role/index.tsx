/*
 * @FilePath: \eic_frontend\src\pages\common\Role\index.tsx
 * @Author: hunter
 * @Date: 2021-04-09 18:03:14
 * @LastEditors: hunter
 * @LastEditTime: 2021-04-12 10:43:52
 */

import Role from '@tsintergy/role';
import { history } from 'umi';

// render
const SystemRole = () => {
  return (
    <div className="-p-SystemRole">
      <Role
        HOST="web"
        authType="organization"
        onLogout={() => {
          // 登录过期的时候调用
          history.push('/Login');
        }}
      />
    </div>
  );
};

export default SystemRole;
