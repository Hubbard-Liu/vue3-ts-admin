/*
 * @Author: Do not edit
 * @Date: 2022-01-20 22:57:00
 * @LastEditors: Liuyu
 * @LastEditTime: 2022-01-26 11:36:08
 * @FilePath: \vue3-ts-init\src\utils\rules.ts
 */
interface rulesType {
  [key: string]: any;
}

interface itemFormType {
  name: string;
  code: string;
  value: string | number;
  rules: string;
  type?: string;
  key: string | number;
}

export interface rulesFormType {
  form: itemFormType[];
  [key: string]: any;
}

export const rules: rulesType = {
  name: [
    {
      required: true,
      message: '请输入名称',
      trigger: 'blur'
    },
    {
      min: 3,
      max: 15,
      message: '长度在 3 至 15 之间',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur'
    },
    {
      min: 3,
      max: 15,
      message: '长度在 3 至 15 之间',
      trigger: 'blur'
    }
  ],
  verify: [
    {
      required: true,
      message: '请输入验证码',
      trigger: 'blur'
    }
  ],
  msg: [
    {
      required: true,
      message: '请输入短信验证码',
      trigger: 'blur'
    },
    {
      min: 4,
      max: 4,
      message: '长度为4位',
      trigger: 'blur'
    }
  ],
  phone: [
    {
      required: true,
      message: '请输入手机号',
      trigger: 'blur'
    },
    {
      validator: rulePhone,
      trigger: ['blur', 'change']
    }
  ]
};

function rulePhone(rule: any, value: any, callback: any): void {
  const reg = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/;
  if (value === '') {
    callback(new Error('请输入正确的手机号'));
  }
  if (!reg.test(value.toString())) {
    callback(new Error('请输入正确长度的手机号'));
  }
  callback();
}
