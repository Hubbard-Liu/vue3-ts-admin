/*
 * @Author: Do not edit
 * @Date: 2022-02-09 11:00:52
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-02-11 10:01:11
 * @FilePath: \vue3-ts-init\src\api\login\login.ts
 */
import http from '@/utils/request';
import type { loginType, responseParams, ILoginResult } from './loginType';

enum Api {
  login = '/login',
  menu = '/role/1/menu'
}

export function API_Login(data: loginType) {
  return http.request<responseParams<ILoginResult>>({
    url: Api.login,
    method: 'POST',
    data
  });
}

// 菜单权限
export function API_Menu() {
  return http.request<responseParams>({
    url: Api.menu,
    method: 'GET'
  });
}
