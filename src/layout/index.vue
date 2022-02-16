<!--
 * @Author: Do not edit
 * @Date: 2022-02-16 15:29:03
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-02-16 16:34:15
 * @FilePath: \vue3-ts-init\src\layout\index.vue
-->
<template>
  <div class="layout">
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
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import { AppMain, Navbar, Sidebar } from './components';

export default defineComponent({
  name: 'Layout',
  // components: { AppMain, Navbar, Sidebar },
  setup() {
    return {};
  }
});
</script>

<style lang="scss"></style>
