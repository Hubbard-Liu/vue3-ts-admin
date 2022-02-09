/*
 * @Author: Do not edit
 * @Date: 2022-01-11 17:21:37
 * @LastEditors: Liuyu
 * @LastEditTime: 2022-02-09 17:57:32
 * @FilePath: \vue3-ts-init\src\utils\request\axios\axios.ts
 */
import axios from 'axios';
import { ElLoading } from 'element-plus';
import type { AxiosInstance } from 'axios';
import type { VAxiosInterceptors, VAxiosRequestConfig } from './type';
import type { LoadingInstance } from 'element-plus/lib/components/loading/src/loading';
import { checkStatus } from '@/utils/request/axios/checkStatus';

class VAxios {
  instance: AxiosInstance;
  interceptors?: VAxiosInterceptors;
  showLoading?: boolean;
  loading?: LoadingInstance;

  constructor(config: VAxiosRequestConfig) {
    this.instance = axios.create(config);
    this.interceptors = config.interceptors;
    this.showLoading = config.showLoading ?? true;

    //实例拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptors,
      this.interceptors?.requestInterceptorsCatch
    );
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptors,
      this.interceptors?.responseInterceptorsCatch
    );

    //全局拦截器
    this.instance.interceptors.request.use(
      (res) => {
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: 'Loading',
            background: 'rgba(255, 255, 255, 0.7)'
          });
        }
        return res;
      },
      (err) => err
    );
    this.instance.interceptors.response.use(
      (res) => {
        this.loading?.close();
        const { data } = res;
        if (!data) {
          checkStatus(400);
          return Promise.reject(new Error(res.toString()));
        }
        return res.data;
      },
      (err) => {
        this.loading?.close();
        checkStatus(err.response.status);
        return err;
      }
    );
  }

  request<T>(config: VAxiosRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 单一请求拦截
      if (config.interceptors?.requestInterceptors) {
        config = config.interceptors.requestInterceptors(config);
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 单一响应拦截
          if (config.interceptors?.responseInterceptors) {
            res = config.interceptors.responseInterceptors(res);
          }
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  get<T>(config: VAxiosRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' });
  }

  post<T>(config: VAxiosRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' });
  }
}

export default VAxios;
