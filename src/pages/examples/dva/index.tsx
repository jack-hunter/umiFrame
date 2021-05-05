/*
 * @FilePath: \eic_frontend\src\pages\examples\dva\index.tsx
 * @Author: hunter
 * @Date: 2021-04-14 10:04:24
 * @LastEditors: hunter
 * @LastEditTime: 2021-04-14 10:06:30
 */
// import Page from '@/components/Page';
// import { getGearInfoList } from '@/services/data-manage';
// import { Button, Card, Space, Typography } from 'antd';
// import React, { useEffect } from 'react';
// import type { ConnectProps } from 'umi';
// import { useDispatch, useRequest, useSelector } from 'umi';
// import type { ModelState } from '../../../layouts/Typical/model';
// import model, { createAction } from './model';

// interface Props extends ConnectProps {
//   model: ModelState;
//   save: (payload: ModelState) => any;
//   saveEffect: (payload: ModelState) => any;
// }

// const Index: React.FC<Props> = (props) => {
//   const dispatch = useDispatch();

//   const { run, loading, data } = useRequest(()=>{}, {
//     initialData: [],
//     formatResult: (res) => {
//       console.log(res);
//       return [res!.data];
//     },
//   });
//   console.log(data);
//   useEffect(() => {
//     return () => {
//       dispatch(createAction('reset'));
//     };
//   }, []);
//   const login = useSelector((state) => state[model.namespace]);

//   return (
//     // <Page>
//       <Card>
//         <Space direction="vertical">
//           <Button
//             type="primary"
//             onClick={() => dispatch(createAction('update', { value: 'update' }))}
//           >
//             update
//           </Button>
//           <Button type="primary" onClick={() => dispatch(createAction('set', { value: 'set' }))}>
//             set
//           </Button>
//           <Button
//             type="primary"
//             onClick={() => dispatch(createAction('reset', { value: 'reset' }))}
//           >
//             reset
//           </Button>
//           <Button loading={loading} type="primary" onClick={() => run()}>
//             请求
//           </Button>
//           <Typography.Text strong>{JSON.stringify(login, null, 2)}</Typography.Text>
//         </Space>
//       </Card>
//     {/* </Page> */}
//   );
// };

// export default Index;
