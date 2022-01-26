<!--
 * @Author: Do not edit
 * @Date: 2022-01-20 22:53:27
 * @LastEditors: Liuyu
 * @LastEditTime: 2022-01-26 15:54:56
 * @FilePath: \vue3-ts-init\src\views\login\components\account-number.vue
-->
<template>
  <div class="account-number">
    <el-form
      ref="ruleFormRef"
      class="account-ruleForm"
      :model="account"
      label-width="auto"
      hide-required-asterisk
    >
      <el-form-item
        v-for="(item, i) in account.form"
        :label="item.name"
        :prop="`form[${i}].value`"
        :rules="accountRules[item.rules]"
        :key="item.key"
        class="account-item"
      >
        <el-input
          v-model.trim="item.value"
          :type="item.type ?? 'text'"
          :placeholder="'请输入' + item.name"
          autosize
          clearable
        ></el-input>
      </el-form-item>
      <!-- submit -->
      <div class="account-number-submit">
        <el-button @click="onSubmit">Log In</el-button>
      </div>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, ref } from 'vue';
import { rules, rulesFormType } from '@/utils/rules';
import { ElForm, ElMessage as $message } from 'element-plus';

export default defineComponent({
  name: 'accountNumber',
  setup() {
    const account: rulesFormType = reactive({
      form: [
        {
          name: '账号',
          code: 'username',
          value: '',
          rules: 'username',
          key: '0'
        },
        {
          name: '密码',
          code: 'password',
          value: '',
          rules: 'password',
          type: 'password',
          key: '1'
        }
      ]
    });

    const formData = computed(() => {
      interface paramsType {
        [key: string]: any;
      }
      const params: paramsType = {};
      account.form.forEach((item) => {
        params[item.code] = item.value;
      });
      return params;
    });

    const ruleFormRef = ref<InstanceType<typeof ElForm>>();

    const accountRules = rules;
    function onSubmit() {
      ruleFormRef.value?.validate((res) => {
        if (!res) return $message.warning('请填写内容');
        $message.success('登入成功');
        console.log('submit!', formData.value);
      });
    }

    return {
      account,
      accountRules,
      onSubmit,
      ruleFormRef
    };
  }
});
</script>

<style lang="scss">
.account-number {
  &-submit {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    width: 100%;
  }
}

.account-item {
  margin: 30px 0 0;
}
</style>
