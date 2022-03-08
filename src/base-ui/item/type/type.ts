/*
 * @Author: Do not edit
 * @Date: 2022-03-02 14:20:44
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-03-03 16:27:40
 * @FilePath: \vue3-ts-init\src\base-ui\item\type\type.ts
 */
import type {
  selectType,
  textareaType,
  datePickerType
} from '../../form/type/type';

export interface itemDataType {
  [key: string]: any;
}

export interface InfoType {
  text: textareaType;
  password: textareaType;
  textarea: textareaType;
  select: selectType;
  datePicker: datePickerType;
}

export type ICurrentType = keyof InfoType;
