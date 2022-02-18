/*
 * @Author: Do not edit
 * @Date: 2022-01-11 15:16:04
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-02-18 17:09:57
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
  ElTabPane,
  ElForm,
  ElFormItem,
  ElInput,
  ElAvatar,
  ElMessage,
  ElRow,
  ElCol,
  ElCheckbox,
  ElHeader,
  ElAside,
  ElMain,
  ElFooter,
  ElContainer,
  ElSubMenu,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElScrollbar
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
  ElAvatar,
  ElMessage,
  ElRow,
  ElCol,
  ElCheckbox,
  ElHeader,
  ElAside,
  ElMain,
  ElFooter,
  ElContainer,
  ElMenu,
  ElSubMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElScrollbar
];

export default (app: App): void => {
  for (const component of components) {
    app.use(component);
  }
  app.config.globalProperties.$loading = ElLoading;
  //全局方法调用
  // import { getCurrentInstance } from 'vue';
  // const global = getCurrentInstance();
  // const { $message }: any = global?.appContext.config.globalProperties;
};
