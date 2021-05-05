/*
 * @FilePath: \eic_frontend\src\pages\common\Exception\403.tsx
 * @Author: hunter
 * @Date: 2021-04-09 16:00:40
 * @LastEditors: hunter
 * @LastEditTime: 2021-04-09 16:05:54
 */

import { Button, Result } from 'antd';
import React from 'react';

const Exception = () => (
  <Result
    status="403"
    title="没有访问权限"
    subTitle="403 Forbidden"
    extra={
      <Button
        type="primary"
        onClick={() => {
          window.location.href = `${API_PREFIX}/`;
        }}
      >
        回首页
      </Button>
    }
  />
);

export default Exception;
