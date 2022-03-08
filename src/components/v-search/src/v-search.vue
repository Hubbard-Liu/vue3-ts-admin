<!--
 * @Author: Do not edit
 * @Date: 2022-03-03 16:48:49
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-03-08 18:10:21
 * @FilePath: \vue3-ts-init\src\components\v-search\src\v-search.vue
-->
<template>
  <div class="v-search">
    <el-card class="v-search-card">
      <v-from v-bind="formConfig" v-model="formConfig.formData"></v-from>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, watch, PropType, onMounted } from 'vue';
import VFrom from '../../../base-ui/form';
import type { ISearchConfig } from '../type/type';

export default defineComponent({
  name: 'v-search',
  components: { VFrom },
  props: {
    /**
     * searchConfig
     * @formData 响应式数据
     * @itemInfo 配置项
     */
    searchConfig: {
      type: Object as PropType<ISearchConfig>,
      required: true
    }
  },
  setup(props, { emit }) {
    const formConfig = reactive({
      formData: {}
    });

    Object.assign(formConfig, props.searchConfig);

    onMounted(() => {
      emit('update:modelValue', { ...formConfig.formData });
    });

    watch(
      () => formConfig.formData,
      (newValue) => {
        emit('update:modelValue', { newValue });
      }
    );

    return {
      formConfig
    };
  }
});
</script>

<style lang="scss"></style>
