<!--
 * @Author: Do not edit
 * @Date: 2022-01-13 10:10:49
 * @LastEditors: Liuyu
 * @LastEditTime: 2022-02-16 21:06:46
 * @FilePath: /vue3-ts-init/src/views/main/home.vue
-->
<template>
  <div class="common-layout">
    <el-container style="height: 100vh">
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'home',
  setup() {
    return {};
  }
});
</script>

<style lang="scss"></style>
