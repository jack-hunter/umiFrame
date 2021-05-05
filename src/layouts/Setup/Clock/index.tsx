/*
 * @FilePath: \eic_frontend\src\layouts\Setup\Clock.tsx
 * @Author: hunter
 * @Date: 2021-04-15 11:27:42
 * @LastEditors: hunter
 * @LastEditTime: 2021-04-15 14:06:54
 */

import moment from 'moment';
import { useState } from 'react';
import './index.less';

export default () => {
  const [time, setTime] = useState(moment());

  setTimeout(() => {
    setTime(moment());
  }, 1000);

  return <span className="-l-Clock">{time.format('YYYY-MM-DD HH:mm:ss')}</span>;
};
