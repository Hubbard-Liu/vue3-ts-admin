<!--
 * @Author: Do not edit
 * @Date: 2022-02-22 17:02:58
 * @LastEditors: Liuyu
 * @LastEditTime: 2022-03-23 23:22:27
 * @FilePath: /vue3-ts-init/src/views/main/analysis/dashboard/dashboard.vue
-->
<template>
  <div class="dashboard">
    <h2>dashboard</h2>
    <VSearch ref="searchRef" v-bind="formConfig" v-model="formConfig.form">
    </VSearch>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import VSearch from '@/components/v-search';

export default defineComponent({
  name: 'dashboard',
  components: { VSearch },
  setup() {
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
          type: 'password'
        },
        {
          label: '文本',
          code: 'textarea',
          type: 'textarea',
          span: {
            xs: 24, // <768px 响应式栅格数或者栅格属性对象
            sm: 24, // ≥768px
            md: 16, // ≥992px
            lg: 12, // ≥1200px
            xl: 8 // ≥1920px
          }
        },
        {
          label: '选择',
          code: 'select',
          type: 'select',
          options: [
            {
              value: 'Option1',
              label: 'Option1'
            },
            {
              value: 'Option2',
              label: 'Option2',
              disabled: true
            }
          ]
        },
        {
          label: '文本2',
          code: 'text2',
          type: 'text'
        },
        {
          label: '文本3',
          code: 'text3',
          type: 'text'
        },
        {
          label: '时间',
          code: 'text4',
          type: 'datePicker'
        },
        {
          label: '日期',
          code: 'text22',
          type: 'datePicker'
        }
      ],
      form: {
        name: '123'
      }
    });

    const searchRef = ref<InstanceType<typeof VSearch>>();

    return {
      formConfig,
      searchRef
    };
  }
});
</script>

<style scoped></style>
