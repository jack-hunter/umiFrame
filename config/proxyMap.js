/*
 * @FilePath: \eic_frontend\config\proxyMap.js
 * @Author: hunter
 * @Date: 2021-04-12 09:54:59
 * @LastEditors: hunter
 * @LastEditTime: 2021-04-12 16:03:28
 */

const { PROJECT_KEY } = process.env;

const yApiProjectIdMap = {
  gcs: 100444,
  boss: 100285,
  gsAdss: 100264,
  sxAdss: 100345,
  fire: 100456,
};

const getProxy = (target, pathRewrite = '/') => {
  const isYApi = target.indexOf('yapi') !== -1;

  const commonProxyConfig = {
    // 一般接口
    [`/web`]: {
      target,
      changeOrigin: true,
      pathRewrite: { '^/': pathRewrite },
    },
  };

  if (isYApi) {
    return {
      // 权限管理等平台接口
      [`/${PROJECT_KEY}/api/sys`]: {
        target: 'http://192.168.1.68:8008/',
        changeOrigin: true,
        pathRewrite: { [`^/${PROJECT_KEY}`]: '/tsie' },
      },
      ...commonProxyConfig,
    };
  }
  return commonProxyConfig;
};

module.exports = {
  阿里云: getProxy('http://120.79.132.195:8080/mssg_v3/'),
  Yapi: getProxy('http://dev.yapi.tsintergy.com', `/mock/${yApiProjectIdMap[PROJECT_KEY]}/`),
};
