/*
 * @Author: Do not edit
 * @Date: 2022-01-20 22:57:00
 * @LastEditors: Liuyu
 * @LastEditTime: 2022-01-25 21:08:19
 * @FilePath: /vue3-ts-init/src/utils/rules.ts
 */
const rulePhone = (rule: any, value: any, callback: any): void => {
  const reg = /^[0-9]{10}/g;
  const isValue = Number(value);
  if (typeof isValue !== 'number') {
    callback(new Error('请输入正确的手机号'));
  }
  if (reg.test(isValue.toString())) {
    callback(new Error('请输入正确长度的手机号'));
  }
  callback();
};

export const rules = {
  username: [
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
  phone: [
    {
      required: true,
      message: '请输入手机号',
      trigger: 'blur'
    },
    { validator: rulePhone, trigger: 'blur', required: true }
  ]
};
