/*
 * @Author: Do not edit
 * @Date: 2022-03-01 15:02:30
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-03-01 15:50:28
 * @FilePath: \vue3-ts-init\src\base-ui\form\type\type.ts
 */
export interface itemInfoType {
  code: string;
  type: string;
  label: string;
  rules?: any;
}

export interface formDataType {
  [key: string]: any;
}
