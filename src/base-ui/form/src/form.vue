<!--
 * @Author: Do not edit
 * @Date: 2022-03-01 14:09:46
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-03-14 14:18:17
 * @FilePath: \vue3-ts-init\src\base-ui\form\src\form.vue
-->
<template>
  <div class="v-form">
    <el-form ref="formRef" :label-width="labelWidth" :model="modelValue">
      <el-row>
        <template v-for="item in itemInfo" :key="item.code">
          <el-col v-bind="item.span || layoutSpan">
            <el-form-item
              :label="item.label"
              :rules="item.rules || rules[item.code]"
              :prop="item.code"
            >
              <v-item
                :key="item.code"
                :currentItem="item"
                :formItemValue="modelValue[item.code]"
                @update:formItemValue="handleChange($event, item.code)"
              ></v-item>
            </el-form-item>
          </el-col>
        </template>

        <!-- 自定义模板 -->
        <slot name="temp"></slot>

        <!-- 自定义按钮 -->
        <el-col :span="6" class="v-form-button">
          <slot name="button"></slot>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from 'vue';
import { rules } from '@/utils/rules';
import type { ElForm } from 'element-plus';
import type { itemInfoType, formDataType, IFormMethods } from '../type/type';
import VItem from '../../item';

export default defineComponent({
  name: 'v-form',
  components: { VItem },
  props: {
    // 全局宽度
    labelWidth: {
      type: String,
      default: '80px'
    },
    // 响应式布局
    layoutSpan: {
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

    const handleChange = (value: any, code: string) => {
      emit('update:modelValue', { ...props.modelValue, [code]: value });
    };

    // 表单方法
    const formMethods: IFormMethods = {
      // 重置表单
      resetForm: () => {
        formRef.value?.resetFields();
      },

      // 表单验证
      validateForm: () => {
        let flag = false;
        formRef.value?.validate((result) => {
          flag = result ? true : false;
        });
        return flag;
      }
    };

    return {
      formRef,
      rules,
      handleChange,
      formMethods
    };
  }
});
</script>

<style lang="scss" scoped>
.v-form-button {
  display: flex;
  justify-content: flex-end;
  margin-left: auto;
}
</style>
