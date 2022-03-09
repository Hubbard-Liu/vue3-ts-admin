<!--
 * @Author: Do not edit
 * @Date: 2022-02-22 17:02:58
 * @LastEditors: Liuyu
 * @LastEditTime: 2022-03-09 21:35:14
 * @FilePath: /vue3-ts-init/src/views/main/analysis/overview/overview.vue
-->
<template>
  <div class="overview">
    <h2>overview1</h2>
    <VFrom :itemInfo="itemInfo" v-model="form"></VFrom>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import VFrom from '@/base-ui/form';

export default defineComponent({
  name: 'overview',
  components: {
    VFrom
  },
  setup() {
    const itemInfo: any = reactive([
      {
        label: '账号',
        code: 'name',
        type: 'text'
      }
    ]);

    const form = ref({ name: '12323' });

    return {
      itemInfo,
      form
    };
  }
});
</script>

<style scoped></style>
