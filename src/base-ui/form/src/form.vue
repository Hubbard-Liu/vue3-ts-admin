<!--
 * @Author: Do not edit
 * @Date: 2022-03-01 14:09:46
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-03-02 16:15:49
 * @FilePath: \vue3-ts-init\src\base-ui\form\src\form.vue
-->
<template>
  <div class="v-form">
    <el-form ref="formRef" :label-width="labelWidth" :model="formData">
      <el-row>
        <template v-for="item in itemInfo" :key="item.code">
          <el-col v-bind="item.span || layoutSpan">
            <el-form-item
              :label="item.label"
              :rules="item.rules || rules[item.code]"
              :prop="item.code"
            >
              <v-item
                v-model="formData[item.code]"
                :currentItem="item"
              ></v-item>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType, reactive, watch } from 'vue';
import type { itemInfoType, formDataType } from '../type/type';
import { rules } from '@/utils/rules';
import { ElForm } from 'element-plus';
import VItem from '../../item';

export default defineComponent({
  name: 'v-form',
  components: { VItem },
  props: {
    labelWidth: {
      type: String,
      default: '80px'
    },
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

    // 组件 v-model
    const formData = reactive<formDataType>({ ...props.modelValue });

    for (const item of props.itemInfo) {
      formData[item.code] ? formData[item.code] : (formData[item.code] = '');
    }

    emit('update:modelValue', { ...formData });

    watch(formData, (newValue) => {
      emit('update:modelValue', { ...newValue });
    });

    // const handleValueChange = (value: any, code: string) => {
    //   Object.assign(formData, { [code]: value });
    //   emit('update:modelValue', { ...formData });
    // };

    return {
      formRef,
      formData,
      rules
    };
  }
});
</script>

<style lang="scss" scoped></style>
