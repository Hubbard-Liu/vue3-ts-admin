<!--
 * @Author: Do not edit
 * @Date: 2022-02-16 16:29:19
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-02-18 17:29:59
 * @FilePath: \vue3-ts-init\src\layout\components\Sidebar\Sidebar.vue
-->
<template>
  <el-scrollbar class="Sidebar">
    <el-menu
      default-active="2"
      class="el-menu-vertical"
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
  </el-scrollbar>
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
.Sidebar {
  width: 100%;
  overflow-x: hidden !important;
  background-color: #3e4556;
}

.el-scrollbar {
  height: 100%;
}

.el-menu {
  border-right-width: 0;

  &:not(.el-menu--collapse) {
    // 这里是解决点击收起展开按钮时的文字卡顿现象
    width: $sidebar-width;
  }
}
</style>
