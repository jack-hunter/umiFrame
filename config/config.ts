/*
 * @FilePath: \eic_frontend\config\config.ts
 * @Author: hunter
 * @Date: 2021-04-07 15:59:16
 * @LastEditors: hunter
 * @LastEditTime: 2021-04-15 19:29:43
 */

import { defineConfig } from 'umi';
import { routes } from './routes';
import { theme } from './theme';

const proxyMap = require('./proxyMap');

const { PROJECT_KEY, PROJECT_NAME, PROXY_KEY, NODE_ENV } = process.env;
const isDev = NODE_ENV === 'development';

export default defineConfig({
  define: {
    PROJECT_KEY,
    // PROJECT_KEY_0,
    // PROJECT_NAME_0,
    // PROJECT_NAME_1,
    // API_PREFIX: `/${PROJECT_KEY}`,
    API_PREFIX: '',
    ROUTES: routes,
    PROXY_KEY,
    // // 开启页面权限
    // ENABLE_ROUTE_AUTH: false, // PROXY_KEY !== 'YApi',
    // // 开启CAS跳转
    // USE_CAS: PROJECT_NAME_0 !== 'sjcos',
    // SHOW_LOGO: false,
    // DEV_USERNAME,
    // DEV_PASSWORD,
    // WEB_SOCKET_DEFAULT: 'ws://127.0.0.1:8085/websocket',
  },
  dynamicImport: {
    loading: '@/components/PageLoading',
  },
  fastRefresh: {},
  history: { type: 'hash' },
  nodeModulesTransform: {
    type: 'none',
  },
  plugins: ['./plugins/index.ts'],
  proxy: PROXY_KEY ? proxyMap[PROXY_KEY] : undefined,
  routes,
  targets: isDev
    ? {
        chrome: 79,
        firefox: false,
        safari: false,
        edge: false,
        ios: false,
      }
    : {
        chrome: 49,
        firefox: 64,
        safari: 10,
        edge: 13,
        ios: 10,
        ie: 9,
      },
  theme,
  title: PROJECT_NAME,
});
