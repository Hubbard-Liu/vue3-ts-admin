/*
 * @Author: Do not edit
 * @Date: 2022-02-22 17:08:50
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-02-23 15:40:35
 * @FilePath: \vue3-ts-init\src\utils\formatRouter.ts
 */
import type { RouteRecordRaw } from 'vue-router';
interface IMenu {
  id?: number;
  name?: string;
  type?: number;
  url?: string | null;
  icon?: string;
  sort?: number | null;
  parentId?: number;
  permission?: string;
  children?: IMenu[] | null;
}

export default function formatRouter(menuList: IMenu[]) {
  // 1.获取全局路由
  const RouterKeys = require.context('../router/main', true, /\.ts$/);
  const allRouter: RouteRecordRaw[] = [];
  RouterKeys.keys().forEach((item) => {
    const route = require(`@/router/main${item.split('.')[1]}.ts`);
    allRouter.push(route.default);
  });

  // 2.路由权限过滤
  const routes = formatMenu(menuList);

  return routes;

  // 方案一  需要require组件的方式
  // function formatMenu(menuList: any) {
  //   const arr: any[] = [];

  //   menuList.forEach((item: any) => {
  //     const routes: any = {};

  //     const { name, url, icon, children } = item;
  //     routes['name'] = name;
  //     routes['path'] = url;
  //     routes['meta'] = { icon: icon ?? '' };

  //     if (children) {
  //       routes['children'] = formatMenu(children);
  //     }

  //     arr.push(routes);
  //   });

  //   return arr;
  // }

  // 方案二
  function formatMenu(menuList: IMenu[], routes: RouteRecordRaw[] = []) {
    menuList.forEach((item: IMenu) => {
      if (item.children) {
        formatMenu(item.children, routes);
      }
      const route = allRouter.find((route) => route.path === item.url);
      if (route) routes.push(route);
    });
    return routes;
  }
}
