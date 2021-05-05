/*
 * @FilePath: \eic_frontend\typings.d.ts
 * @Author: hunter
 * @Date: 2021-04-07 15:13:21
 * @LastEditors: hunter
 * @LastEditTime: 2021-04-15 10:00:26
 */

import React from 'react';

declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.svg' {
  export function ReactComponent(props: React.SVGProps<SVGSVGElement>): React.ReactElement;
  const url: string;
  export default url;
}

interface Window {
  baseHost: string;
}

declare const API_PREFIX: string;
declare const PROXY_KEY: string;
declare const ROUTES: any[];
