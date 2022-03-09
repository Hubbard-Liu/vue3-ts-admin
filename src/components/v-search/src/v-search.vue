<!--
 * @Author: Do not edit
 * @Date: 2022-03-03 16:48:49
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-03-09 17:42:00
 * @FilePath: \vue3-ts-init\src\components\v-search\src\v-search.vue
-->
<template>
  <div class="v-search">
    <el-card class="v-search-card">
      <v-from :item-info="searchInfo" v-model="searchData"></v-from>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, PropType, ref, watch } from 'vue';
import VFrom from '../../../base-ui/form';
import type { ISearchConfig } from '../type/type';

export default defineComponent({
  name: 'v-search',
  components: { VFrom },
  props: {
    /**
     * searchConfig
     * @formData 响应式数据
     * @itemInfo 配置项
     */
    searchConfig: {
      type: Object as PropType<ISearchConfig>,
      required: true
    },
    form: {
      type: Object
    }
  },
  // emits: ['update:form'],
  setup(props, { emit }) {
    const searchInfo: any = reactive(props.searchConfig.itemInfo);
    const searchOriginData: any = {};

    for (const item of searchInfo) {
      searchOriginData[item.code]
        ? searchOriginData[item.code]
        : (searchOriginData[item.code] = '');
    }

    if (Object.keys(searchOriginData).length !== searchInfo.length) {
      throw new Error('表单有重复code项!');
    }
    const searchData = ref(searchOriginData);

    emit('update:form', { ...searchData.value });

    // watch(
    //   () => props.form,
    //   (value) => {
    //     searchData.value = value;
    //   },
    //   { deep: true }
    // );

    watch(
      searchData,
      (value) => {
        emit('update:form', { ...value });
      },
      { deep: true }
    );

    return {
      searchInfo,
      searchData
    };
  }
});
</script>

<style lang="scss">
.v-search-card {
  padding-top: 5px;
}
</style>
