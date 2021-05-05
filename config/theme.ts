/*
 * @FilePath: \eic_frontend\config\theme.ts
 * @Author: hunter
 * @Date: 2021-04-12 14:33:35
 * @LastEditors: hunter
 * @LastEditTime: 2021-04-12 14:36:09
 */

const { PROJECT_KEY } = process.env;

// ! 不要定义官方变量以外的任何变量，变量链接见
// ! https://ant-design.gitee.io/docs/react/customize-theme-cn
const defaultTheme = { '@primary-color': '#012d74' };

const themeMap: Record<string, any> = {
  eic: defaultTheme,
  template: defaultTheme,
};

export const theme = PROJECT_KEY ? themeMap[PROJECT_KEY] : defaultTheme;
