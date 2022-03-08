/*
 * @Author: Do not edit
 * @Date: 2022-03-03 17:10:40
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-03-08 16:12:48
 * @FilePath: \vue3-ts-init\src\components\v-search\type\type.ts
 */
export interface ISearchConfig<D = formData, I = itemInfo> {
  formData: D;
  itemInfo: I;
}

export interface formData {
  [key: string]: any;
}

export interface itemInfo {
  [key: string]: any;
}
