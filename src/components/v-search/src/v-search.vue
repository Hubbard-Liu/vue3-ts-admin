<!--
 * @Author: Do not edit
 * @Date: 2022-03-03 16:48:49
 * @LastEditors: Liuyu
 * @LastEditTime: 2022-03-23 23:29:51
 * @FilePath: /vue3-ts-init/src/components/v-search/src/v-search.vue
-->
<template>
  <div class="v-search">
    <el-card class="v-search-card">
      <slot name="header"></slot>

      <v-from
        ref="VFormRef"
        :itemInfo="itemInfo"
        :layoutSpan="layoutSpan"
        :modelValue="searchData"
        @update:modelValue="handleValue($event)"
        :labelWidth="labelWidth"
      >
        <!-- 搜索按钮 -->
        <template #button>
          <el-button type="primary" icon="search" @click="handleSearch"
            >查询</el-button
          >
          <el-button icon="refresh" @click="handleReset">重置</el-button>
        </template>
      </v-from>

      <slot name="footer"></slot>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, onBeforeMount, watch } from 'vue';
import VFrom from '../../../base-ui/form';
import type { itemInfoType } from '@/base-ui/form/type/type';
import type { formData } from '../type/type';

export default defineComponent({
  name: 'v-search',
  components: { VFrom },
  /**
   * @props
   * @itemInfo 配置项 必传
   * @form 初始化数据
   * @labelWidth 全局宽度
   * @layoutSpan 响应式布局
   */
  props: {
    /**
     * @labelWidth 全局宽度
     */
    labelWidth: {
      type: String,
      default: '80px'
    },
    /**
     * @layoutSpan 响应式布局
     */
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
    /**
     * @itemInfo 表单配置项
     */
    itemInfo: {
      type: Array as PropType<itemInfoType[]>,
      default: () => {
        return [];
      }
    },
    /**
     * @form 为初始化数据 无响应式
     */
    modelValue: {
      type: Object
    }
  },
  emits: ['update:modelValue', 'handleSearch'],
  setup(props, { emit }) {
    const VFormRef = ref<InstanceType<typeof VFrom>>();

    // 初始化
    onBeforeMount(() => {
      initSearchData(searchOriginData);
    });

    // const searchInfo = reactive(props.itemInfo);
    const searchOriginData: formData = { ...props.modelValue };

    // 初始化formData
    const initSearchData = (searchOriginData: formData) => {
      for (const item of props.itemInfo) {
        searchOriginData[`${item.code}`]
          ? searchOriginData[`${item.code}`]
          : (searchOriginData[`${item.code}`] = '');
      }

      if (Object.keys(searchOriginData).length !== props.itemInfo.length) {
        throw new Error('表单有重复code项!');
      }
    };

    // 向下传递响应式 数据
    const searchData = ref(searchOriginData);

    // 搜索按钮
    const handleSearch = () => {
      // 表单验证
      const flag = VFormRef.value?.formMethods?.validateForm();
      flag ? emit('handleSearch', { ...searchData.value }) : '';
    };

    // 重置表单
    const handleReset = () => {
      VFormRef.value?.formMethods?.resetForm();
    };

    // 监听子孙数据变化
    const handleValue = (val: any) => {
      searchData.value = val;
      emit('update:modelValue', { ...val });
    };

    // // 监听父组件当前数据变化
    watch(
      () => props.modelValue,
      (value) => {
        searchData.value = { ...searchData.value, ...value };
      },
      {
        deep: true
      }
    );

    return {
      VFormRef,
      searchData,
      handleSearch,
      handleReset,
      handleValue
    };
  }
});
</script>

<style lang="scss" scoped>
.v-search-card {
  padding-top: 10px;
}
</style>
