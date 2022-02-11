/*
 * @Author: Do not edit
 * @Date: 2022-02-10 16:05:16
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-02-11 16:40:38
 * @FilePath: \vue3-ts-init\src\store\getters.ts
 */
import { IStore } from './modules/types';
// 用户类型
import { stateUserType } from './modules/user/userType';

// 公共类型合并
export type RootGetters = stateUserType & modulesGetters;

// 模块类型
import { modulesGetters } from './modules/types';

const getters = {
  token: (state: IStore) => state.user.token,
  userInfo: (state: IStore) => state.user.userInfo,
  userMenu: (state: IStore) => state.user.userMenu
};

export default getters;
