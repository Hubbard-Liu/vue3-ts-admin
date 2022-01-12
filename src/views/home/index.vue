<!--
 * @Author: Do not edit
 * @Date: 2022-01-11 15:02:19
 * @LastEditors: Liuyu
 * @LastEditTime: 2022-01-12 10:44:56
 * @FilePath: \vue3-ts-init\src\views\home\index.vue
-->
<template>
  <div class="home">
    <el-button>home</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import http from '@/utils/request';

export default defineComponent({
  name: 'home',
  setup() {
    interface home {
      list: string[];
    }

    http
      .request<home>({
        url: '/home1'
      })
      .then((res) => {
        console.log(res);
      });
  }
});
</script>

<style scoped lang="scss"></style>
