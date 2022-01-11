/*
 * @Author: Do not edit
 * @Date: 2022-01-11 15:16:04
 * @LastEditors: Liuyu
 * @LastEditTime: 2022-01-11 16:59:58
 * @FilePath: \vue3-ts-init\src\plugins\element-plus.ts
 */
import type { App } from 'vue';
import { ElButton, ElCard } from 'element-plus';

const components = [ElButton, ElCard];

export default (app: App): void => {
  for (const component of components) {
    app.component(component.name, component);
  }
};
