/*
 * @Author: Do not edit
 * @Date: 2022-02-11 14:23:40
 * @LastEditors: Liuyu
 * @LastEditTime: 2022-02-22 20:48:32
 * @FilePath: /vue3-ts-init/src/router/permission.ts
 */
import { Router } from 'vue-router';
import store from '@/store';
import { ElMessage } from 'element-plus';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

NProgress.configure({ showSpinner: false });

const whiteList = ['/login', '/404'];

export function createRouterGuards(router: Router) {
  router.beforeEach((to, from, next) => {
    NProgress.start();

    const token = store.getters.token;

    if (token) {
      if (to.path === '/login') {
        next({ path: '/' });
        return;
      }

      // 判断菜单权限是否存在
      if (store.getters.userMenu && store.getters.userMenu.length > 0) {
        next();
      } else {
        try {
          store.dispatch('user/getMenu');
          next();
        } catch (err) {
          const error = err as string;
          ElMessage.error(error.toString());
          store.commit('user/RESET_STATE');
          next({ path: '/login' });
        }
      }
    } else {
      // 判断是否为白名单
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
