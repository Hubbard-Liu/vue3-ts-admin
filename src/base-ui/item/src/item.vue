<!--
 * @Author: Do not edit
 * @Date: 2022-03-01 17:03:35
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-03-02 18:52:14
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
import type { itemDataType } from '../type/type';

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
    // 配置项
    const itemConfig = (currentType: string, currentItem: itemDataType) => {
      // placeholder
      const placeholder = computed(() => {
        const label: any = {
          select: '请选择',
          datePicker: '请选择'
        };

        const placeholderValue: string =
          currentItem?.placeholder ||
          `${label[currentType] ?? '请输入'}${currentItem.label}`;

        return placeholderValue;
      });

      // disabled
      const disabled = computed(() => {
        const disabledValue: boolean = currentItem?.disabled || false;
        return disabledValue;
      });

      const config: itemDataType = {
        text: {
          placeholder: placeholder.value,
          disabled: disabled.value,
          clearable: true,
          type: 'text'
        },
        password: {
          placeholder: placeholder.value,
          disabled: disabled.value,
          clearable: true,
          type: 'password',
          showPassword: true
        },
        textarea: {
          placeholder: placeholder.value,
          disabled: disabled.value,
          clearable: true,
          rows: 2,
          showWordLimit: true,
          maxlength: 200,
          type: 'textarea'
        },
        select: {
          placeholder: placeholder.value,
          disabled: disabled.value,
          clearable: true,
          size: currentItem.size ?? 'default'
        },
        datePicker: {
          format: currentItem.format ?? 'YYYY/MM/DD hh:mm:ss',
          placeholder: placeholder.value,
          type: 'datetime',
          disabled: disabled.value,
          clearable: true,
          valueFormat: currentItem.valueFormat ?? 'x',
          size: currentItem.size ?? 'default'
        }
      };

      return config[currentType];
    };

    // value传值
    const handleValueChange = (value: any) => {
      emit('update:modelValue', value);
    };

    // 类型
    const currentType = computed(() => {
      const type: string = props.currentItem.type;
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
