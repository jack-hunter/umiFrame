/*
 * @FilePath: \eic_frontend\config\routes\eic.ts
 * @Author: hunter
 * @Date: 2021-04-09 16:01:42
 * @LastEditors: hunter
 * @LastEditTime: 2021-04-15 10:57:14
 */

import common from './common';

const projectMap = require('../projectMap');

const { eic } = projectMap;

export default [
  ...common,
  {
    title: eic,
    component: '@/layouts/index',
    routes: [
      {
        title: '首页',
        path: '/HomePage',
        component: '@/pages/eic/HomePage/index',
      },
      {
        title: '数据管理',
        path: '/Assessment',
        routes: [
          {
            title: '报表分析',
            path: '/Assessment/FormsAnalysis',
            //   hidden: true,
            component: '@/pages/eic/Assessment/FormsAnalysis/index',
          },
          {
            title: '年统计分析',
            path: '/Assessment/YearStatic',
            //   hidden: true,
            component: '@/pages/eic/Assessment/YearStatic/index',
          },
          {
            title: '测试',
            path: '/Assessment/Test',
            //   hidden: true,
            component: '@/pages/eic/Assessment/Test/index',
          },
        ],
      },
    ],
  },
];
