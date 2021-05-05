/*
 * @FilePath: \eic_frontend\src\pages\eic\HomePage\Month\index.tsx
 * @Author: hunter
 * @Date: 2021-04-15 18:43:14
 * @LastEditors: hunter
 * @LastEditTime: 2021-04-15 19:10:46
 */

// 例子
import { useEffect } from 'react';
import { useDispatch, useRequest } from 'umi';
import './index.less';
import { createAction } from './model';
import { retrieveMonthService } from './service';

const Month: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const { data, run: retrieveApi } = useRequest(retrieveMonthService, {
    manual: true,
    onSuccess: (e) => {
      console.log({ e });
      dispatch(createAction('update', e));
    },
  });

  useEffect(() => {
    retrieveApi({
      applyType: 1,
      startTime: 20210101,
      endTime: 20211231,
    });
  }, []);
  console.log(data);
  return <div className="-p-HomePage-Month">456</div>;
};

export default Month;
