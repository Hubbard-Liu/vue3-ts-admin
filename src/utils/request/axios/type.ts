/*
 * @Author: Do not edit
 * @Date: 2022-01-11 17:31:28
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-02-11 11:32:37
 * @FilePath: \vue3-ts-init\src\utils\request\axios\type.ts
 */
import type { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface VAxiosInterceptors<T = AxiosResponse> {
  requestInterceptors?: (res: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorsCatch?: (err: any) => any;
  responseInterceptors?: (res: T) => T;
  responseInterceptorsCatch?: (err: any) => any;
}

export interface VAxiosRequestConfig<T = AxiosResponse>
  extends AxiosRequestConfig {
  interceptors?: VAxiosInterceptors<T>;
  showLoading?: boolean;
  headers?: any;
}
