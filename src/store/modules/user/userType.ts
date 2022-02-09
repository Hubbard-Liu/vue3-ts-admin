/*
 * @Author: Do not edit
 * @Date: 2022-02-09 15:06:45
 * @LastEditors: Liuyu
 * @LastEditTime: 2022-02-09 16:32:10
 * @FilePath: \vue3-ts-init\src\store\modules\user\userType.ts
 */
export type userInfoType = {
  id?: string | number | null;
  name?: string | null;
};

export type stateUserType = {
  token: string;
  userInfo: userInfoType;
};
