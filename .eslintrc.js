/*
 * @FilePath: \eic_frontend\.eslintrc.js
 * @Author: hunter
 * @Date: 2021-04-12 11:45:52
 * @LastEditors: hunter
 * @LastEditTime: 2021-04-12 11:47:24
 */

module.exports = {
  // root: true,
  extends: ['@tsintergy/react/eslint'],
  plugins: ['prettier'], // 下载eslint-plugin-prettier，使eslint能够监听到prettier的格式错误
  // "off"或0 -关闭规则
  // “warn” 或1 - 开启规则, 使用警告 程序不会退出
  // "error"或2 - 开启规则, 使用错误 程序退出
  rules: {
    'prettier/prettier': 2,
  },
};
