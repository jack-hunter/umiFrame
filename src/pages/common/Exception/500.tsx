/*
 * @FilePath: \eic_frontend\src\pages\common\Exception\500.tsx
 * @Author: hunter
 * @Date: 2021-04-09 16:00:41
 * @LastEditors: hunter
 * @LastEditTime: 2021-04-09 16:05:45
 */

import { Button, Result } from 'antd';
import React from 'react';

const Exception = () => (
  <Result
    status="500"
    title="内部服务器错误"
    subTitle="500 Internal Server Error"
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
