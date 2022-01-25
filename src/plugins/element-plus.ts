/*
 * @Author: Do not edit
 * @Date: 2022-01-11 15:16:04
 * @LastEditors: Liuyu
 * @LastEditTime: 2022-01-22 21:05:03
 * @FilePath: /vue3-ts-init/src/plugins/element-plus.ts
 */
import type { App } from 'vue';
import 'element-plus/dist/index.css';
import {
  ElButton,
  ElCard,
  ElLoading,
  ElTabs,
  ElIcon,
  ElTabPane,
  ElForm,
  ElFormItem,
  ElInput,
  ElAvatar
} from 'element-plus';

const components = [
  ElButton,
  ElCard,
  ElTabs,
  ElIcon,
  ElTabPane,
  ElForm,
  ElFormItem,
  ElInput,
  ElAvatar
];

export default (app: App): void => {
  for (const component of components) {
    app.use(component);
  }
  app.config.globalProperties.ElLoading = ElLoading;
};
