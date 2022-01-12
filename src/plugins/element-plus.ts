/*
 * @Author: Do not edit
 * @Date: 2022-01-11 15:16:04
 * @LastEditors: Liuyu
 * @LastEditTime: 2022-01-12 09:38:29
 * @FilePath: \vue3-ts-init\src\plugins\element-plus.ts
 */
import type { App } from 'vue';
import { ElButton, ElCard, ElLoading } from 'element-plus';

const components = [ElButton, ElCard];

export default (app: App): void => {
  app.config.globalProperties.ElLoading = ElLoading;
  for (const component of components) {
    app.use(component);
  }
};
