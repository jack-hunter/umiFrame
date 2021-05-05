/*
 * @FilePath: \eic_frontend\scripts\start.js
 * @Author: hunter
 * @Date: 2021-04-07 15:37:30
 * @LastEditors: hunter
 * @LastEditTime: 2021-04-12 10:34:39
 */

const inquirer = require('inquirer');
const { spawn } = require('child_process');
const projectMap = require('../config/projectMap');
const proxyMap = require('../config/proxyMap');

const seperator = ' ———— ';
const projectStringList = Object.entries(projectMap).map(
  (item) => `${item[0]}${seperator}${item[1]}`,
);

inquirer
  .prompt([
    {
      type: 'list',
      name: 'project',
      message: '⊙ 选择项目：',
      choices: projectStringList,
    },
    {
      type: 'list',
      name: 'proxy',
      message: '⊙ 选择接口代理：',
      choices: Object.keys(proxyMap),
    },
  ])
  .then((answers) => {
    const PROJECT_KEY = answers.project.split(seperator)[0];
    const PROJECT_NAME = answers.project.split(seperator)[1];

    spawn(
      /^win/.test(process.platform) ? 'cross-env.cmd' : 'cross-env',
      [
        `PROJECT_KEY=${PROJECT_KEY}`,
        `PROJECT_NAME=${PROJECT_NAME}`,
        `PROXY_KEY=${answers.proxy}`,
        // 'COMPRESS=none', // 默认压缩 CSS 和 JS，值为 none 时不压缩，build 时有效。
        'UMI_UI=none', // 会出现一个mini图标气泡浮在右下角
        'umi',
        'dev',
      ],
      {
        stdio: 'inherit',
      },
    );
    return true;
  })
  .catch((error) => {
    console.log('[debug]: error', error);
  });
