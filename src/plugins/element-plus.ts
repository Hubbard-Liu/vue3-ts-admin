/*
 * @Author: Do not edit
 * @Date: 2022-01-11 15:16:04
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-03-14 15:08:00
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
  ElScrollbar,
  ElSelect,
  ElDatePicker,
  ElBreadcrumb,
  ElBreadcrumbItem
} from 'element-plus';
import * as ElIcons from '@element-plus/icons-vue';

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
  ElScrollbar,
  ElSelect,
  ElDatePicker,
  ElBreadcrumb,
  ElBreadcrumbItem
];

export default (app: App): void => {
  for (const component of components) {
    app.use(component);
  }
  // 全局注册icons
  for (const icon in ElIcons) {
    app.component(icon, (ElIcons as any)[icon]);
  }
  app.config.globalProperties.$loading = ElLoading;
  //全局方法调用
  // import { getCurrentInstance } from 'vue';
  // const global = getCurrentInstance();
  // const { $message }: any = global?.appContext.config.globalProperties;
};
