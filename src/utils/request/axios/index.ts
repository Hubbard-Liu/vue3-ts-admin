/*
 * @Author: Do not edit
 * @Date: 2022-01-11 17:21:37
 * @LastEditors: Liuyu
 * @LastEditTime: 2022-01-11 18:20:34
 * @FilePath: \vue3-ts-init\src\utils\request\axios\index.ts
 */
import VAxios from './axios';

const http = new VAxios({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 5000,
  interceptors: {
    requestInterceptors: (res) => res,
    requestInterceptorsCatch: (err) => err,
    responseInterceptors: (res) => res,
    responseInterceptorsCatch: (err) => err
  }
});

export default http;
