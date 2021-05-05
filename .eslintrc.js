/*
 * @FilePath: \eic_frontend\.eslintrc.js
 * @Author: hunter
 * @Date: 2021-04-12 11:45:52
 * @LastEditors: hunter
 * @LastEditTime: 2021-04-12 11:47:24
 */

module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  rules: {
    'react-hooks/rules-of-hooks': 'error', // 检查 Hook 的规则
    'react-hooks/exhaustive-deps': [
      'warn',
      {
        additionalHooks: 'useReadyEffect',
      },
    ], // 检查 effect 的依赖
    'no-plusplus': 'off',
    'no-unused-vars': ['warn', { args: 'none' }],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { args: 'none' }],
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
  },
};
