/*
 * @Author: Do not edit
 * @Date: 2022-02-09 15:06:45
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-02-11 09:56:41
 * @FilePath: \vue3-ts-init\src\store\modules\user\userType.ts
 */
export type userInfoType = {
  id?: string | number | null;
  name?: string | null;
};

export type stateUserType = {
  token: string;
  userInfo: userInfoType;
  userMenu: any[];
};
