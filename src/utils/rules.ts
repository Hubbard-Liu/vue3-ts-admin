/*
 * @Author: Do not edit
 * @Date: 2022-01-20 22:57:00
 * @LastEditors: Liuyu
 * @LastEditTime: 2022-01-20 23:37:07
 * @FilePath: \vue3-ts-init\src\utils\rules.ts
 */
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
  ]
};
