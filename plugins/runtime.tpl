// src/.umi/plugin-dva/dva.ts
// const runtimeDva = plugin.applyPlugins({
//   key: 'dva',
//   type: ApplyPluginsType.modify,
//   initialValue: {},
// });
// dva跟key对应
export const dva = () => {
  return {
    plugins: [{{{ plugin }}}]
  }
}