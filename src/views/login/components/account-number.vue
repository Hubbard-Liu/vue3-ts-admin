<!--
 * @Author: Do not edit
 * @Date: 2022-01-20 22:53:27
 * @LastEditors: Liuyu
 * @LastEditTime: 2022-02-20 15:35:34
 * @FilePath: /vue3-ts-init/src/views/login/components/account-number.vue
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
    </el-form>

    <!-- 记住密码 -->
    <el-row justify="space-between">
      <el-col :span="8">
        <el-checkbox
          v-model="account.rememberPassword"
          style="color: var(--el-color-primary)"
          label="自动登录"
          size="default"
        ></el-checkbox>
      </el-col>
      <el-col :span="5">
        <el-button type="text">忘记密码</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  computed,
  watch,
  ref,
  onMounted
} from 'vue';
import { rules, rulesFormType } from '@/utils/rules';
import { ElForm, ElMessage as $message } from 'element-plus';
import storage from '@/utils/storage';
import store from '@/store';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'accountNumber',
  setup() {
    const router = useRouter();

    // 数据
    const account: rulesFormType = reactive({
      // 表单项
      form: [
        {
          name: '账号',
          code: 'name',
          value: '',
          rules: 'name',
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
      ],
      // 记住密码
      rememberPassword: false
    });

    // 表单数据
    interface paramsType {
      name: string;
      password: string;
      [key: string]: string;
    }
    const formData = computed({
      get() {
        const params: any = {};
        account.form.forEach((item) => {
          params[item.code] = item.value;
        });
        return params;
      },
      set(obj: paramsType) {
        if (Object.keys(obj).length > 0) {
          for (const item in obj) {
            const index = account.form.findIndex((val) => val.code === item);
            account.form[index].value = obj[item];
          }
          return;
        }
        account.form.forEach((item) => (item.value = ''));
      }
    });

    // 记住密码
    onMounted(() => {
      const flag = storage.get('remember') || null;

      if (flag) {
        const auth = storage.get('auth');
        formData.value = auth;
        account.rememberPassword = flag;
      }
    });

    // 监听记住密码
    watch(
      () => account.rememberPassword,
      (value) => {
        if (value) {
          storage.set('auth', formData.value);
          storage.set('remember', account.rememberPassword);
          return;
        }
        storage.remove('auth');
        storage.remove('remember');
      }
    );

    // 表单提交
    const ruleFormRef = ref<InstanceType<typeof ElForm>>();
    function onSubmit() {
      ruleFormRef.value?.validate((params) => {
        if (!params) {
          $message.warning('请填写内容');
          return false;
        }
        store
          .dispatch('user/login', formData.value)
          .then(() => {
            // 存储成功的账号密码
            if (account.rememberPassword) {
              storage.set('auth', formData.value);
            }
            $message.success('登录成功');
            router.replace('/');
            return true;
          })
          .catch(() => {
            $message.error('账号或密码错误!');
            return false;
          });
      });
      return false;
    }

    return {
      account,
      accountRules: rules,
      ruleFormRef,
      onSubmit
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
</style>
