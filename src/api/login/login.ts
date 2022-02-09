/*
 * @Author: Do not edit
 * @Date: 2022-02-09 11:00:52
 * @LastEditors: Liuyu
 * @LastEditTime: 2022-02-09 17:02:26
 * @FilePath: \vue3-ts-init\src\api\login\login.ts
 */
import http from '@/utils/request';
import type { loginType, responseParams, ILoginResult } from './loginType';

enum Api {
  login = '/login'
}

export function API_Login(data: loginType) {
  return http.request<responseParams<ILoginResult>>({
    url: Api.login,
    method: 'POST',
    data
  });
}
