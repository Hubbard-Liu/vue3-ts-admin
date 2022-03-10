<!--
 * @Author: Do not edit
 * @Date: 2022-03-03 16:48:49
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-03-10 11:24:40
 * @FilePath: \vue3-ts-init\src\components\v-search\src\v-search.vue
-->
<template>
  <div class="v-search">
    <el-card class="v-search-card">
      <slot name="header"></slot>

      <v-from
        :itemInfo="searchInfo"
        :layoutSpan="layoutSpan"
        v-model="searchData"
        :labelWidth="labelWidth"
      >
        <!-- 搜索按钮 -->
        <template #button>
          <el-button type="primary" icon="search">查询</el-button>
          <el-button icon="refresh">重置</el-button>
        </template>
      </v-from>

      <slot name="footer"></slot>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, PropType, ref, onBeforeMount } from 'vue';
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
    form: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    // 初始化
    onBeforeMount(() => {
      initSearchData(searchOriginData);
    });

    const searchInfo = reactive(props.itemInfo);
    const searchOriginData: formData = { ...props.form };

    // 初始化formData
    const initSearchData = (searchOriginData: formData) => {
      for (const item of searchInfo) {
        searchOriginData[`${item.code}`]
          ? searchOriginData[`${item.code}`]
          : (searchOriginData[`${item.code}`] = '');
      }

      if (Object.keys(searchOriginData).length !== searchInfo.length) {
        throw new Error('表单有重复code项!');
      }
    };

    // 向下传递响应式的数据
    const searchData = ref(searchOriginData);

    return {
      searchInfo,
      searchData
    };
  }
});
</script>

<style lang="scss">
.v-search-card {
  padding-top: 10px;
}
</style>
