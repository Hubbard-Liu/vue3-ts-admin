<!--
 * @Author: Do not edit
 * @Date: 2022-02-16 16:29:19
 * @LastEditors: Liuyu
 * @LastEditTime: 2022-02-20 17:20:03
 * @FilePath: /vue3-ts-init/src/layout/components/Sidebar/Sidebar.vue
-->
<template>
  <el-scrollbar class="Sidebar">
    <!--  default-active="" 默认展开项 -->
    <el-menu
      class="el-menu-vertical"
      active-text-color="#669dfc"
      background-color="#3e4556"
      text-color="#c1cad8"
      router
      :unique-opened="false"
      :collapse-transition="false"
      :collapse="!isCollapse"
    >
      <template v-for="item in menuList" :key="item.sort">
        <SidebarItemVue :menuItem="item"></SidebarItemVue>
      </template>
    </el-menu>
  </el-scrollbar>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import store from '@/store';
import SidebarItemVue from './SidebarItem.vue';

export default defineComponent({
  name: 'Sidebar',
  components: {
    SidebarItemVue
  },
  props: {
    isCollapse: {
      type: Boolean
    }
  },
  setup() {
    const menuList = store.getters.userMenu ?? [];

    return {
      menuList
    };
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
    width: $sidebarWidth;
  }
}
</style>
