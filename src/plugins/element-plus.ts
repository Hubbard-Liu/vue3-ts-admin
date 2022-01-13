/*
 * @Author: Do not edit
 * @Date: 2022-01-11 15:16:04
 * @LastEditors: Liuyu
 * @LastEditTime: 2022-01-13 15:44:44
 * @FilePath: \vue3-ts-init\src\plugins\element-plus.ts
 */
import type { App } from 'vue';
import 'element-plus/dist/index.css';
import {
  ElButton,
  ElCard,
  ElLoading,
  ElTabs,
  ElIcon,
  ElTabPane
} from 'element-plus';

const components = [ElButton, ElCard, ElTabs, ElIcon, ElTabPane];

export default (app: App): void => {
  for (const component of components) {
    app.use(component);
  }
  app.config.globalProperties.ElLoading = ElLoading;
};
