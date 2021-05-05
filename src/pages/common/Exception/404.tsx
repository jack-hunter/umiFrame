/*
 * @FilePath: \eic_frontend\src\pages\common\Exception\404.tsx
 * @Author: hunter
 * @Date: 2021-04-09 16:00:41
 * @LastEditors: hunter
 * @LastEditTime: 2021-04-09 16:05:47
 */

import { Button, Result } from 'antd';
import React from 'react';

const Exception = () => (
  <Result
    status="404"
    title="未找到页面"
    subTitle="404 Not Found"
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
