declare module 'dva-model-extend' {
  import { Model } from 'dva';

  declare function extend(...params: Model[]): Model;

  export default extend;
}
