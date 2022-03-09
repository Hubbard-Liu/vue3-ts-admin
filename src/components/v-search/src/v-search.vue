<!--
 * @Author: Do not edit
 * @Date: 2022-03-03 16:48:49
 * @LastEditors: Liuyu
 * @LastEditTime: 2022-03-09 22:21:11
 * @FilePath: /vue3-ts-init/src/components/v-search/src/v-search.vue
-->
<template>
  <div class="v-search">
    <el-card class="v-search-card">
      <slot name="header"></slot>

      <v-from :item-info="searchInfo" v-model="searchData">
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
import type { ISearchConfig } from '../type/type';

export default defineComponent({
  name: 'v-search',
  components: { VFrom },
  props: {
    /**
     * @searchConfig = {} 传递 以下数据
     * @formData 响应式数据
     * @itemInfo 配置项
     * @labelWidth 全局宽度
     * @layoutSpan 响应式布局
     */
    searchConfig: {
      type: Object as PropType<ISearchConfig>,
      required: true
    },
    /**
     * @form 为初始化数据 无响应式
     */
    form: {
      type: Object
    }
  },
  setup(props) {
    onBeforeMount(() => {
      initSearchData(searchOriginData);
    });

    const searchInfo: any = reactive(props.searchConfig.itemInfo);
    const searchOriginData: any = { ...props.form };

    // 初始化formData
    const initSearchData = (searchOriginData: any) => {
      for (const item of searchInfo) {
        searchOriginData[item.code]
          ? searchOriginData[item.code]
          : (searchOriginData[item.code] = '');
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
