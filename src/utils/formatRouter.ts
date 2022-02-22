/*
 * @Author: Do not edit
 * @Date: 2022-02-22 17:08:50
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-02-22 18:00:53
 * @FilePath: \vue3-ts-init\src\utils\formatRouter.ts
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

  // 1.获取全局路由表
  const RouterKeys = require.context('../router/main', true, /\.ts$/);
  const allRouterPath: string[] = [];
  RouterKeys.keys().forEach((item) => {
    allRouterPath.push(item.split('.')[1]);
  });

  // 2.路由权限过滤
  console.log(allRouterPath);

  // formatMenu(allRouterPath);
  // function formatMenu(item: any) {}
}
