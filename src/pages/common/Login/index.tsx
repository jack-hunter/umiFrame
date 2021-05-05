/*
 * @FilePath: \eic_frontend\src\pages\common\Login\index.tsx
 * @Author: hunter
 * @Date: 2021-04-09 16:04:25
 * @LastEditors: hunter
 * @LastEditTime: 2021-04-15 09:53:54
 */

import { history, useModel } from 'umi';
import { Button, Input } from 'antd';

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
    <div>
      <div>
        账号：
        <Input />
      </div>
      <div>
        密码：
        <Input />
      </div>
      <div>
        <Button
          onClick={() => {
            handleSuccessLogin();
          }}
        >
          登录
        </Button>
      </div>
    </div>
  );
};
