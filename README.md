<!--
 * @FilePath: \eic_frontend\README.md
 * @Author: hunter
 * @Date: 2021-04-07 15:13:21
 * @LastEditors: hunter
 * @LastEditTime: 2021-04-07 15:36:48
-->
# EIC（能源产业链监测与预警系统）


## Development Environment（开发环境）

- nodejs >= 10.20.1
- IE >= 11


## Development Preparation（开发准备）

### 开启git文件大小写敏感
```bash
git config core.ignorecase false
```

### 安装全局工具
```bash
npm i -g commitizen nrm
```

### 安装 node_modules
```bash
# 添加 npm 私服源
nrm add tsie http://npmreg.gzdevops.tsintergy.com/
# 使用私服源
nrm use tsie
# 安装依赖包
yarn
```

## Getting Started（入门）

### 启动项目
```bash
yarn start
```

