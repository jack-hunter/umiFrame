/*
 * @FilePath: \eic_frontend\config\routes\index.ts
 * @Author: hunter
 * @Date: 2021-04-09 16:01:04
 * @LastEditors: hunter
 * @LastEditTime: 2021-04-12 15:45:40
 */

import eic from './eic';
import template from './template';

const { PROJECT_KEY } = process.env;

const routeMap: Record<string, any> = {
  eic,
  template,
};

export const routes = PROJECT_KEY ? routeMap[PROJECT_KEY] : [];
