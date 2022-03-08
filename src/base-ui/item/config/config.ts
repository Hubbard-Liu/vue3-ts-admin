/*
 * @Author: Do not edit
 * @Date: 2022-03-03 15:27:09
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-03-03 16:10:17
 * @FilePath: \vue3-ts-init\src\base-ui\item\config\config.ts
 */
import { computed } from 'vue';
import type { itemDataType, InfoType, ICurrentType } from '../type/type';

export const itemConfig = (
  currentType: ICurrentType,
  currentItem: itemDataType
) => {
  // placeholder
  const placeholder = computed(() => {
    const label: itemDataType = {
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

  const config: InfoType = {
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
