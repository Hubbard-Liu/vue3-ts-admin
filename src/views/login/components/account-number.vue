<!--
 * @Author: Do not edit
 * @Date: 2022-01-20 22:53:27
 * @LastEditors: Liuyu
 * @LastEditTime: 2022-01-25 21:14:44
 * @FilePath: /vue3-ts-init/src/views/login/components/account-number.vue
-->
<template>
  <div>
    <el-form
      ref="ruleFormRef"
      :model="account"
      :rules="accountRules"
      class="account-ruleForm"
      :hide-required-asterisk="false"
    >
      <el-form-item
        v-for="(item, i) in account.form"
        :label="item.name"
        :prop="`form[${i}].rules`"
        :key="item.key"
        class="account-item"
      >
        <el-input
          v-model="item.value"
          :placeholder="'请输入' + item.name"
        ></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { rules } from '@/utils/rules';

export default defineComponent({
  name: 'accountNumber',
  setup() {
    const account = reactive({
      form: [
        {
          name: '账号',
          value: '',
          rules: 'username',
          key: '0'
        },
        {
          name: '密码',
          value: '',
          rules: 'password',
          key: '1'
        }
      ]
    });
    const accountRules = rules;

    return {
      account,
      accountRules
    };
  }
});
</script>

<style lang="scss">
.account-item {
  margin: 30px 0 0;
}
</style>
