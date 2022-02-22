/*
 * @Author: Do not edit
 * @Date: 2022-02-22 17:08:50
 * @LastEditors: Liuyu
 * @LastEditTime: 2022-02-22 23:59:35
 * @FilePath: /vue3-ts-init/src/utils/formatRouter.ts
 */
export default function formatRouter() {
  const menuList = [
    {
      id: 38,
      name: '系统总览',
      type: 1,
      url: '/main/analysis',
      icon: 'el-icon-monitor',
      sort: 1,
      children: [
        {
          id: 39,
          url: '/main/analysis/overview',
          name: '核心技术',
          sort: 106,
          type: 2,
          children: null,
          parentId: 38
        },
        {
          id: 40,
          url: '/main/analysis/dashboard',
          name: '商品统计',
          sort: 107,
          type: 2,
          children: null,
          parentId: 38
        }
      ]
    }
  ];

  // 1.获取全局路由
  const RouterKeys = require.context('../router/main', true, /\.ts$/);
  const allRouter: any[] = [];
  RouterKeys.keys().forEach((item) => {
    const route = require(`@/router/main${item.split('.')[1]}.ts`);
    allRouter.push(route.default);
  });

  // 2.路由权限过滤
  const routes = formatMenu(menuList);
  console.log(routes);

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
  function formatMenu(menuList: any, routes: any[] = []) {
    menuList.forEach((item: any) => {
      if (item.children) {
        formatMenu(item.children, routes);
      } else {
        const route = allRouter.find((route) => route.path === item.url);
        routes.push(route);
      }
    });
    return routes;
  }
}
