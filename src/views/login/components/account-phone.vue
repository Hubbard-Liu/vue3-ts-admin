<!--
 * @Author: Do not edit
 * @Date: 2022-01-22 20:56:00
 * @LastEditors: Liuyu
 * @LastEditTime: 2022-02-09 09:44:25
 * @FilePath: \vue3-ts-init\src\views\login\components\account-phone.vue
-->
<template>
  <div class="account-phone">
    <el-form
      ref="ruleFormRef"
      :model="account"
      class="account-ruleForm"
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
        <div class="account-phone-item">
          <el-input
            v-model.trim="item.value"
            :type="item.type ?? 'text'"
            :placeholder="'请输入' + item.name"
            autosize
            clearable
          ></el-input>

          <el-button v-if="item.code === 'msg'" style="margin: 0 10px"
            >获取验证码</el-button
          >

          <Verify
            v-if="item.code === 'verify'"
            ref="verifyRef"
            :height="30"
          ></Verify>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  ref,
  computed,
  getCurrentInstance
} from 'vue';
import { rules, rulesFormType } from '@/utils/rules';
import Verify from '@/components/Verify.vue';
import { ElForm, ElMessage as $message } from 'element-plus';

export default defineComponent({
  name: 'accountPhone',
  components: {
    Verify
  },
  setup() {
    const global = getCurrentInstance();

    const account: rulesFormType = reactive({
      form: [
        {
          name: '手机号',
          code: 'phone',
          value: '',
          rules: 'phone',
          key: '0'
        },
        {
          name: '短信验证码',
          code: 'msg',
          value: '',
          rules: 'msg',
          key: '1'
        },
        {
          name: '验证码',
          code: 'verify',
          value: '',
          rules: 'verify',
          key: '2'
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
      const verifyRef: any = global?.refs?.verifyRef;
      console.log('verifyRef', verifyRef[0].state);

      ruleFormRef.value?.validate((res) => {
        if (!res) {
          $message.warning('请填写内容');
          return false;
        }
        $message.success('登入成功');
        return true;
      });
      return false;
    }

    return {
      account,
      accountRules,
      ruleFormRef,
      formData,
      onSubmit
    };
  }
});
</script>

<style lang="scss">
.account-phone-item {
  display: flex;
  width: 100%;
}
</style>
