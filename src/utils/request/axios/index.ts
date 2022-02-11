/*
 * @Author: Do not edit
 * @Date: 2022-01-11 17:21:37
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-02-11 14:05:36
 * @FilePath: \vue3-ts-init\src\utils\request\axios\index.ts
 */
import VAxios from './axios';
import { BASE_URL, TIME_OUT } from './config';
import store from '@/store';

const http = new VAxios({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptors: (res) => {
      const token: string = store.getters.token;
      // token配置
      if (store.getters.token) {
        res.headers!.Authorization = `Bearer ${token}`;
      }
      return res;
    },
    requestInterceptorsCatch: (err) => err,
    responseInterceptors: (res) => res,
    responseInterceptorsCatch: (err) => err
  }
});

export default http;
