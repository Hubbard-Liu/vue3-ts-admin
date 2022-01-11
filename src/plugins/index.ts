/*
 * @Author: Do not edit
 * @Date: 2022-01-11 15:14:21
 * @LastEditors: Liuyu
 * @LastEditTime: 2022-01-11 15:23:24
 * @FilePath: \vue3-ts-init\src\plugins\index.ts
 */
import type { App } from 'vue';
import elementPlus from './element-plus';

export default (app: App): void => {
  app.use(elementPlus);
};
