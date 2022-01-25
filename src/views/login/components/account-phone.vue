<!--
 * @Author: Do not edit
 * @Date: 2022-01-22 20:56:00
 * @LastEditors: Liuyu
 * @LastEditTime: 2022-01-23 23:03:49
 * @FilePath: /vue3-ts-init/src/views/login/components/account-phone.vue
-->
<template>
  <div class="account-phone">
    <el-form
      ref="ruleFormRef"
      :model="account"
      :rules="accountRules"
      class="account-ruleForm"
      :hide-required-asterisk="false"
    >
      <el-form-item
        v-for="item in account"
        :label="item.name"
        :prop="item.rules"
        :key="item.name"
        class="account-item"
      >
        <el-input
          v-model="item.value"
          :placeholder="'请输入' + item.name"
        ></el-input>

        <el-button v-if="item.name === '验证码'">获取验证码</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
// import { rules } from '@/utils/rules';

export default defineComponent({
  name: 'accountPhone',
  setup() {
    // 自定义规则
    function rulePhone(rule: any, value: any, callback: any): void {
      console.log(value);

      // const reg = /^[0-9]{10}/g;
      // const isValue = Number(value);
      // if (typeof isValue !== 'number') {
      //   callback(new Error('请输入正确的手机号'));
      // }
      // if (reg.test(isValue.toString())) {
      //   callback(new Error('请输入正确长度的手机号'));
      // }
      callback();
    }
    // 所有规则
    const accountRules = {
      phone: [
        // {
        //   required: true,å
        //   message: '请输入手机号',
        //   trigger: 'blur'
        // },
        { validator: rulePhone, trigger: 'blur', required: true }
      ]
    };

    // 循环项
    const account = reactive([
      {
        name: '手机号',
        value: '',
        rules: 'phone'
      }
    ]);

    return {
      account,
      accountRules
    };
  }
});
</script>

<style scoped></style>
