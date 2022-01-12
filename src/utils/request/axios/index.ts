/*
 * @Author: Do not edit
 * @Date: 2022-01-11 17:21:37
 * @LastEditors: Liuyu
 * @LastEditTime: 2022-01-12 10:07:12
 * @FilePath: \vue3-ts-init\src\utils\request\axios\index.ts
 */
import VAxios from './axios';
import { BASE_URL, TIME_OUT } from './config';

const http = new VAxios({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptors: (res) => res,
    requestInterceptorsCatch: (err) => err,
    responseInterceptors: (res) => res,
    responseInterceptorsCatch: (err) => err
  }
});

export default http;
