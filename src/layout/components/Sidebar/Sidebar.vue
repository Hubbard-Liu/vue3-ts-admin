<!--
 * @Author: Do not edit
 * @Date: 2022-02-16 16:29:19
 * @LastEditors: Liuyu
 * @LastEditTime: 2022-02-17 22:52:35
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
      :unique-opened="false"
      :collapse-transition="false"
      :collapse="!isCollapse"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <span>Navigator One</span>
        </template>
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item one</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title>
          <el-icon><location /></el-icon>
          <span>Navigator One</span>
        </template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item one</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Location } from '@element-plus/icons-vue';

export default defineComponent({
  name: 'Sidebar',
  components: {
    Location
  },
  props: { isCollapse: Boolean },
  setup() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.el-menu {
  border-right-width: 0;
}
</style>
