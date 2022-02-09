/*
 * @Author: Do not edit
 * @Date: 2022-02-09 15:09:02
 * @LastEditors: Liuyu
 * @LastEditTime: 2022-02-09 15:13:19
 * @FilePath: \vue3-ts-init\src\store\modules\types.ts
 */
// 模块类型集合
import { stateUserType } from './user/userType';

export interface IStore {
  user: stateUserType;
}
