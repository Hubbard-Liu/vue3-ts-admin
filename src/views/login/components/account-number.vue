<!--
 * @Author: Do not edit
 * @Date: 2022-01-20 22:53:27
 * @LastEditors: Liuyu
 * @LastEditTime: 2022-01-20 23:40:55
 * @FilePath: \vue3-ts-init\src\views\login\components\account-number.vue
-->
<template>
  <div>
    <el-form
      ref="ruleFormRef"
      :model="account"
      :rules="accountRules"
      class="account-ruleForm"
    >
      <el-form-item
        v-for="item in account"
        :label="item.name"
        :prop="item.rules"
        :key="item.name"
        class="account-item"
      >
        <el-input v-model="item.value"></el-input>
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
    const account = reactive([
      {
        name: '账号',
        value: '',
        rules: 'username'
      },
      {
        name: '密码',
        value: '',
        rules: 'password'
      }
    ]);
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
  margin-top: 30px;
}
</style>
