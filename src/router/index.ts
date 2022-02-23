/*
 * @Author: Do not edit
 * @Date: 2022-01-11 14:52:12
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-02-23 16:38:01
 * @FilePath: \vue3-ts-init\src\router\index.ts
 */
import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import { createRouterGuards } from './permission';
import layout from '@/layout/index.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    name: 'login',
    path: '/login',
    component: () =>
      import(/* webpackChunkName: "login" */ '@/views/login/login.vue')
  },
  {
    name: 'main',
    path: '/main',
    component: layout,
    children: []
  },
  {
    name: 'NotFound',
    path: '/404',
    component: () =>
      import(/* webpackChunkName: "404" */ '@/views/error/404.vue')
  }
  // {
  //   path: '/:pathMatch(.*)*',
  //   redirect: '/404',
  //   component: () =>
  //     import(/* webpackChunkName: "404" */ '@/views/error/404.vue')
  // }
];

const router = createRouter({
  routes,
  history: createWebHistory()
});

// 注册守卫
createRouterGuards(router);

export default router;
