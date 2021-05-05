/*
 * @FilePath: \eic_frontend\src\pages\common\Exception\Incompatible.tsx
 * @Author: hunter
 * @Date: 2021-04-09 16:00:41
 * @LastEditors: hunter
 * @LastEditTime: 2021-04-09 16:05:38
 */

import { Result } from 'antd';
import React from 'react';

const Exception = () => (
  <Result status="warning" title="浏览器不兼容">
    <div style={{ fontSize: 16, textAlign: 'center' }}>
      <p>由于IE浏览器与现代浏览器技术标准不兼容，</p>
      <p>请在360极速浏览器、360安全浏览器、谷歌浏览器、Edge浏览器等现代浏览器上使用本系统。</p>
    </div>
  </Result>
);

export default Exception;
