/*
 * @FilePath: \eic_frontend\src\types\Route.ts
 * @Author: hunter
 * @Date: 2021-04-13 15:04:05
 * @LastEditors: hunter
 * @LastEditTime: 2021-04-15 11:28:45
 */

import type { FunctionComponent } from 'react';

interface IComponent extends FunctionComponent {
  getInitialProps?: Function;
  preload?: () => Promise<any>;
}

export interface Route {
  path: string;
  exact?: boolean;
  redirect?: string;
  component?: IComponent;
  routes?: Route[];
  key?: any;
  strict?: boolean;
  sensitive?: boolean;
  wrappers?: any[];

  title: string;
  hidden: boolean;
}
