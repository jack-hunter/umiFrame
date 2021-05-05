/*
 * @FilePath: \eic_frontend\src\app.tsx
 * @Author: hunter
 * @Date: 2021-04-12 11:35:45
 * @LastEditors: hunter
 * @LastEditTime: 2021-04-15 17:48:45
 */

import { retrieveMenuTreeTreeApi } from '@/services/Role/services';
import { getCommonEnum } from '@/utils/enum';
import moment from 'moment';
import type { RequestConfig } from 'umi';
import { ErrorShowType, history } from 'umi';
import { messageDebounce } from './app.config';
import { IEVersion } from './utils/url';

declare const codeMessage: any;
export const request: RequestConfig = {
  params: {
    _t: IEVersion() === -1 ? undefined : moment().format('X'), // ie浏览器 加时间戳 放置get请求缓存bug
  },
  headers: {
    // 'Cache-Control': 'no-store',
    // Pragma: 'no-store',
  },
  validateCache: () => false, // 关闭get请求缓存，ie11登录死循环问题
  responseInterceptors: [
    (response) => {
      const { ok, status } = response;
      if (ok && status === 200) {
        return response;
      }
      const error = Error(`${status} ${codeMessage[status]}`);
      error.name = 'HttpError';
      throw error;
    },
  ],
  errorConfig: {
    adaptor: (res: any) => {
      return {
        // 服务器处理正常 || 代理为YApi || 是地图json
        success:
          res?.retCode === 'T200' || PROXY_KEY === 'YApi' || res?.type === 'FeatureCollection',
        data: res?.data,
        errorCode: res?.retCode,
        errorMessage: res?.retMsg,
        showType: ErrorShowType.SILENT,
      };
    },
  },
  errorHandler: (error: any) => {
    // 登录超时，跳转到cas登录页
    console.error('error-network', error);
    // cas 登录超时 - 跳转到对应的网页
    // if (USE_CAS && error?.data?.retMsg === '登录超时' && error?.data?.data) {
    //   window.location.href = error?.data?.data;
    //   return;
    // }
    // 普通登录超时 跳转到登录页
    if (error?.data?.retCode === 'T000' && error?.data?.retMsg === '登录超时') {
      history.push('/Login');
      return;
    }
    if (error.name === 'HttpError') {
      messageDebounce(error.message);
    } else {
      messageDebounce(error.message);
    }
    throw error;
  },
};

export async function getInitialState() {
  //   const accessTree: any = {};
  //   const access: any = {};
  let commonEnum: any = {};
  let menuTree;
  //   const userInfo: any = {};
  //   const routes: any = {};
  //   const sysParameter: any = {};
  //   const sideBarRoutes: any[] = [];
  //   const menuTree: any = {};

  try {
    commonEnum = await getCommonEnum();
    menuTree = await retrieveMenuTreeTreeApi();

    // commonEnum = getCommonEnumResp.commonEnum;
    // userInfo = getCommonEnumResp.userInfo;
    // const sysParameterResp = await querySysParameter();
    // sysParameter = sysParameterResp.data;
  } catch (error) {
    console.error('[debug]: getInitialState -> error', error);
  }

  //   try {
  //     const res = await getMenuTreeTreeRequest();
  //     if (res?.data?.children) {
  //       menuTree = res?.data || {};
  //       // 查找该系统下的权限树集合
  //       accessTree =
  //         res?.data?.children?.find((p: any) => `/${p.menu.menupath}` === API_PREFIX) || {};
  //       access = accessTree?.children?.reduce((acc: any, item: any) => flattenAccess(item, acc), {});
  //     }
  //   } catch (error) {
  //     console.error('[debug]: getInitialState -> error', error);
  //   }

  //   const contentRoutes = ROUTES.find((p) => p.title === 'content').routes;
  //   const incomeRouter = filterAuthTypeTree(accessTree);
  //   const mergedRoutes = mergeRouter(incomeRouter, contentRoutes);
  //   sideBarRoutes = filterShowRoutes(mergedRoutes);
  //   console.log('🚀 ~ file: app.tsx ~ line 129 ~ getInitialState ~ sideBarRoutes', sideBarRoutes);
  //   routes = flattenRoutes(mergedRoutes);
  //   }

  return {
    menuTree,
    // accessTree,
    // access,
    // routes,
    // sideBarRoutes,
    commonEnum,
    // userInfo,
    // sysParameter,
    // isIE,
  };
}
