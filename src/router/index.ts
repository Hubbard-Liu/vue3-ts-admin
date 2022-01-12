/*
 * @Author: Do not edit
 * @Date: 2022-01-11 14:52:12
 * @LastEditors: Liuyu
 * @LastEditTime: 2022-01-12 09:29:21
 * @FilePath: \vue3-ts-init\src\router\index.ts
 */
import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () =>
      import(/* webpackChunkName: "home" */ '@/views/home/index.vue')
  }
];

const router = createRouter({
  routes,
  history: createWebHistory()
});

export default router;
