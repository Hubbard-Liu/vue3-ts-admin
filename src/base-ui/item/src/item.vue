<!--
 * @Author: Do not edit
 * @Date: 2022-03-01 17:03:35
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-03-03 16:04:34
 * @FilePath: \vue3-ts-init\src\base-ui\item\src\item.vue
-->
<template>
  <div class="v-item">
    <template v-if="['text', 'password', 'textarea'].includes(currentType)">
      <el-input
        v-bind="config"
        :modelValue="modelValue"
        @update:modelValue="handleValueChange($event)"
      ></el-input>
    </template>

    <template v-else-if="currentType === 'select'">
      <el-select
        v-bind="config"
        :modelValue="modelValue"
        @update:modelValue="handleValueChange($event)"
      >
        <el-option
          v-for="item in currentItem.options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled"
        >
        </el-option>
      </el-select>
    </template>

    <template v-else-if="currentType === 'datePicker'">
      <el-date-picker
        style="width: 100%"
        v-bind="config"
        :modelValue="modelValue"
        @update:modelValue="handleValueChange($event)"
      >
      </el-date-picker>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue';
import type { itemDataType, ICurrentType } from '../type/type';
import { itemConfig } from '../config/config';

export default defineComponent({
  name: 'v-item',
  props: {
    // 表单value
    modelValue: {
      type: [String, Number, Array, Object, Boolean]
    },
    // 当前item
    currentItem: {
      type: Object as PropType<itemDataType>,
      default: () => {
        return {};
      }
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    // value传值
    const handleValueChange = (value: any) => {
      emit('update:modelValue', value);
    };

    // 类型
    const currentType = computed(() => {
      const type: ICurrentType = props.currentItem.type;
      return type;
    });

    // 生成配置项
    const config = itemConfig(currentType.value, props.currentItem);

    return {
      handleValueChange,
      config,
      currentType
    };
  }
});
</script>

<style lang="scss" scoped>
.v-item {
  width: 100%;
}
</style>
