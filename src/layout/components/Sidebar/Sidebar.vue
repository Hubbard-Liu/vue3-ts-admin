<!--
 * @Author: Do not edit
 * @Date: 2022-02-16 16:29:19
 * @LastEditors: Liuyu
 * @LastEditTime: 2022-02-16 22:27:25
 * @FilePath: /vue3-ts-init/src/layout/components/Sidebar/Sidebar.vue
-->
<template>
  <div class="Sidebar">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      active-text-color="#669dfc"
      background-color="#3e4556"
      text-color="#fff"
    >
      <el-sub-menu index="1">
        <template #title>
          <!-- <el-icon><location /></el-icon> -->
          <span>Navigator One</span>
        </template>
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item one</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Sidebar',
  setup() {
    return {};
  }
});
</script>

<style lang="scss">
.el-menu {
  border-right-width: 0;
}
</style>
