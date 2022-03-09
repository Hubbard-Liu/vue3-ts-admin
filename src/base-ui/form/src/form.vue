<!--
 * @Author: Do not edit
 * @Date: 2022-03-01 14:09:46
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-03-09 17:38:49
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
              <!-- v-model="formData[item.code]" -->
              <!-- :formItem="formData[item.code]" -->
              <!-- @update:modelValue="handleValueChange($event, item.code)" -->
              <v-item
                :key="item.code"
                :formItemValue="modelValue[item.code]"
                @update:formItemValue="handleChange($event, item.code)"
                :currentItem="item"
              ></v-item>
            </el-form-item>
          </el-col>
        </template>

        <el-col :span="6" class="v-form-button">
          <slot name="button"></slot>
          <el-button type="primary" icon="search">查询</el-button>
          <el-button icon="refresh">重置</el-button>
        </el-col>
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
    // const formData = reactive<formDataType>({ ...props.modelValue });

    // for (const item of props.itemInfo) {
    //   formData[item.code] ? formData[item.code] : (formData[item.code] = '');
    // }

    // if (Object.keys(formData).length !== props.itemInfo.length) {
    //   throw new Error('表单有重复code项!');
    // }

    // emit('update:modelValue', { ...formData });

    const handleChange = (value: any, code: string) => {
      emit('update:modelValue', { ...props.modelValue, [code]: value });
    };

    return {
      formRef,
      // formData,
      rules,
      handleChange
    };
  }
});
</script>

<style lang="scss" scoped>
.v-form-button {
  display: flex;
  justify-content: end;
  margin-left: auto;
}
</style>
