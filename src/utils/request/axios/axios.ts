import axios from 'axios';
import type { AxiosInstance } from 'axios';
import type { VAxiosInterceptors, VAxiosRequestConfig } from './type';

class VAxios {
  instance: AxiosInstance;
  interceptors?: VAxiosInterceptors;

  constructor(config: VAxiosRequestConfig) {
    this.instance = axios.create(config);
    this.interceptors = config.interceptors;

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
        return res;
      },
      (err) => err
    );
    this.instance.interceptors.response.use(
      (res) => {
        return res.data;
      },
      (err) => err
    );
  }

  request<T>(config: VAxiosRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      this.instance
        .request<any, T, any>(config)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

export default VAxios;
