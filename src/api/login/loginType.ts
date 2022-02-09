/*
 * @Author: Do not edit
 * @Date: 2022-02-09 11:14:37
 * @LastEditors: Liuyu
 * @LastEditTime: 2022-02-09 17:00:39
 * @FilePath: \vue3-ts-init\src\api\login\loginType.ts
 */
// 返回类型
export interface responseParams<T = any> {
  code: number;
  data: T;
}

export interface loginType {
  name: string;
  password: string;
}

// 返回接口类型根据实际情况
export interface ILoginResult {
  id: number;
  name: string;
  token: string;
}
