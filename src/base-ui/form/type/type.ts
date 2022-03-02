/*
 * @Author: Do not edit
 * @Date: 2022-03-01 15:02:30
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-03-02 18:42:47
 * @FilePath: \vue3-ts-init\src\base-ui\form\type\type.ts
 */
export type itemInfoType = baseType &
  selectType &
  textareaType &
  datePickerType;

interface baseType {
  code: string;
  type: string;
  label: string;
  rules?: any;
  span?: spanType;
  disabled?: boolean;
  size?: string;
  clearable?: boolean;
}

interface selectType<O = any> {
  options?: O;
}

interface textareaType {
  span?: spanType;
  format?: string;
  rows?: number;
  showWordLimit?: boolean;
}

interface datePickerType {
  format?: string;
  valueFormat?: string;
  showWordLimit?: boolean;
}

interface spanType {
  xs?: number; // <768px 响应式栅格数或者栅格属性对象
  sm?: number; // ≥768px
  md?: number; // ≥992px
  lg?: number; // ≥1200px
  xl?: number; // ≥1920px
  span?: number;
}

export interface formDataType<T = any> {
  [key: string]: T;
}
