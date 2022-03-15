/*
 * @Author: Do not edit
 * @Date: 2022-03-01 15:02:30
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-03-14 14:15:36
 * @FilePath: \vue3-ts-init\src\base-ui\form\type\type.ts
 */
export type itemInfoType = base & selectType & textareaType & datePickerType;

interface base {
  code: string;
  type: string;
  label: string;
}
interface baseType {
  type?: string;
  rules?: any;
  span?: spanType;
  disabled?: boolean;
  size?: string;
  clearable?: boolean;
  placeholder?: string;
}

export interface selectType<O = any> extends baseType {
  options?: O;
}

export interface textareaType extends baseType {
  span?: spanType;
  format?: string;
  rows?: number;
  showWordLimit?: boolean;
  maxlength?: number;
  showPassword?: boolean;
}

export interface datePickerType extends baseType {
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

export interface IFormMethods {
  validateForm(): boolean;
  resetForm(): void;
}
