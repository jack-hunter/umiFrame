/*
 * @FilePath: \eic_frontend\config\routes\common.ts
 * @Author: hunter
 * @Date: 2021-04-09 16:01:18
 * @LastEditors: hunter
 * @LastEditTime: 2021-04-12 10:43:42
 */

export default [
  {
    title: '权限管理',
    path: '/Role',
    component: '@/pages/common/Role',
  },
  {
    title: '登录',
    path: '/Login',
    component: '@/pages/common/Login',
  },
  {
    path: '/Exception',
    routes: [
      {
        title: '403',
        path: '/Exception/403',
        component: '@/pages/common/Exception/403',
      },
      {
        title: '404',
        path: '/Exception/404',
        component: '@/pages/common/Exception/404',
      },
      {
        title: '500',
        path: '/Exception/500',
        component: '@/pages/common/Exception/500',
      },
      {
        title: 'Incompatible',
        path: '/Exception/Incompatible',
        component: '@/pages/common/Exception/Incompatible',
      },
    ],
  },
  { path: '/', redirect: '/Login' },
];
