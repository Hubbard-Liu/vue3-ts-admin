/*
 * @Author: Do not edit
 * @Date: 2022-02-11 14:23:40
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-02-23 17:37:53
 * @FilePath: \vue3-ts-init\src\router\permission.ts
 */
import { Router } from 'vue-router';
import store from '@/store';
import { ElMessage } from 'element-plus';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

NProgress.configure({ showSpinner: false });

const whiteList = ['/login', '/404'];

export function createRouterGuards(router: Router) {
  router.beforeEach(async (to, from, next) => {
    NProgress.start();

    const token = store.getters.token;

    if (token) {
      if (to.path === '/login') {
        next({ path: '/' });
      } else {
        // 判断菜单权限是否存在
        if (store.getters.userMenu && store.getters.userMenu.length > 0) {
          next();
        } else {
          try {
            await store.dispatch('user/getMenu');
            /**
             * // 解决 vue3 addRoute 页面刷新后 路由失效。 **异步添加的动态路由无法立即匹配到
             * 如果参数to不能找到对应的路由的话，就再执行一次beforeEach((to, from, next))直到其中的next({ ...to})能找到对应的路由为止。
             * replace 禁止用户手动返回
             */
            next({ path: to.path });
          } catch (err) {
            const error = err as string;
            ElMessage.error(error.toString());
            store.commit('user/RESET_STATE');
            next({ path: '/login' });
          }
        }
      }
    } else {
      //判断是否为白名单
      if (whiteList.includes(to.path)) {
        next();
      } else {
        next({ path: '/login' });
      }
    }
  });

  router.afterEach(() => {
    // to, from, failure
    NProgress.done();
  });

  router.onError((error) => {
    console.log(error, '路由错误');
  });
}
