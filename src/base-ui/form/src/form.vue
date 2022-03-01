<!--
 * @Author: Do not edit
 * @Date: 2022-03-01 14:09:46
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-03-01 17:23:06
 * @FilePath: \vue3-ts-init\src\base-ui\form\src\form.vue
-->
<template>
  <div class="v-form">
    <el-form ref="formRef" :label-width="labelWidth" :model="formData">
      <el-row>
        <template v-for="item in itemInfo" :key="item.code">
          <el-col v-bind="span">
            <el-form-item
              :label="item.label"
              :rules="item.rules || rules[item.code]"
              :prop="item.code"
            >
              <el-input v-model="formData[item.code]"></el-input>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType, reactive } from 'vue';
import { ElForm } from 'element-plus';
import type { itemInfoType, formDataType } from '../type/type';
import { rules } from '@/utils/rules';

export default defineComponent({
  name: 'v-form',
  props: {
    labelWidth: {
      type: String,
      default: '80px'
    },
    span: {
      type: Object,
      default: () => {
        return {
          xs: 24, // <768px 响应式栅格数或者栅格属性对象
          sm: 12, // ≥768px
          md: 8, // ≥992px
          lg: 6, // ≥1200px
          xl: 4 // ≥1920px
        };
      }
    },
    // 表单配置项
    itemInfo: {
      type: Array as PropType<itemInfoType[]>,
      default: () => {
        return [];
      }
    },
    // 表单value
    modelValue: {
      type: Object as PropType<formDataType>,
      default: () => {
        return {};
      }
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const formRef = ref<InstanceType<typeof ElForm>>();

    // 组件 v-model
    const formData = reactive<formDataType>({ ...props.modelValue });

    for (const item of props.itemInfo) {
      formData[item.code] = '';
    }

    emit('update:modelValue', formData);

    return {
      formRef,
      formData,
      rules
    };
  }
});
</script>

<style lang="scss" scoped></style>
