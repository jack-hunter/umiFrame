/*
 * @Author: liuzh@tsintergy.com
 * @Date: 2020-11-26 15:48:41
 * @LastEditors: liuzh@tsintergy.com
 * @LastEditTime: 2020-11-26 17:46:25
 */
import { readFileSync } from 'fs';
import { join } from 'path';
import { IApi, utils } from 'umi';

const { Mustache, lodash, winPath } = utils;

export default (api: IApi) => {
  const { logger } = api;

  // 配置
  api.describe({
    key: 'dva',
    config: {
      schema(joi) {
        return joi.object({
          disableModelsReExport: joi.boolean(),
          extraModels: joi.array().items(joi.string()),
          hmr: joi.boolean(),
          immer: joi.boolean(),
          skipModelValidate: joi.boolean(),
        });
      },
    },
  });

  // 生成临时文件
  api.onGenerateFiles({
    fn() {
      // runtime.tsx
      const runtimeTpl = readFileSync(join(__dirname, 'runtime.tpl'), 'utf-8');
      api.writeTmpFile({
        path: 'plugin-dva/dva-handle-actions.tsx',
        content: Mustache.render(runtimeTpl, {
          plugin: `require('${winPath(require.resolve('./dvaHandleActions'))}').default()`,
        }),
      });
    },
    // 要比 preset-built-in 靠前
    // 在内部文件生成之前执行，这样 hasModels 设的值对其他函数才有效
    stage: -1,
  });

  // Runtime Plugin
  // 增加一个Runtime Plugin
  api.addRuntimePlugin(() => [join(api.paths.absTmpPath!, 'plugin-dva/dva-handle-actions.tsx')]);

  api.addRuntimePluginKey(() => ['dva_handle_actions']);
};
