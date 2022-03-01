<!--
 * @Author: Do not edit
 * @Date: 2022-02-22 17:02:58
 * @LastEditors: Liuyu
 * @LastEditTime: 2022-03-01 21:24:50
 * @FilePath: /vue3-ts-init/src/views/main/analysis/dashboard/dashboard.vue
-->
<template>
  <div class="dashboard">
    <h2>dashboard</h2>
    <v-from v-bind="formConfig" v-model="formConfig.formData"></v-from>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import VFrom from '@/base-ui/form';

export default defineComponent({
  name: 'dashboard',
  components: { VFrom },
  setup() {
    // const formData = reactive({});
    // const formConfig = [
    //   {
    //     label: '账号',
    //     code: 'name',
    //     type: 'text'
    //   },
    //   {
    //     label: '密码',
    //     code: 'password',
    //     type: 'text'
    //   },
    //   {
    //     label: '密码2',
    //     code: 'dsd',
    //     type: 'text',
    //     rules: [
    //       {
    //         required: true,
    //         message: '请输入验证码',
    //         trigger: 'blur'
    //       }
    //     ]
    //   },
    //   {
    //     label: '密码3',
    //     code: 'qwe',
    //     type: 'text'
    //   },
    //   {
    //     label: '密码4',
    //     code: 'qwde',
    //     type: 'text'
    //   }
    // ];

    const formConfig = reactive({
      itemInfo: [
        {
          label: '账号',
          code: 'name',
          type: 'text'
        },
        {
          label: '密码',
          code: 'password',
          type: 'text'
        }
      ],
      formData: {
        name: '123'
      }
    });

    return {
      formConfig
    };
  }
});
</script>

<style scoped></style>
