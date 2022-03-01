<!--
 * @Author: Do not edit
 * @Date: 2022-02-16 16:29:19
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-03-01 11:41:36
 * @FilePath: \vue3-ts-init\src\layout\components\Sidebar\Sidebar.vue
-->
<template>
  <el-scrollbar class="Sidebar">
    <!--  default-active="" 默认展开项 -->
    <el-menu
      :default-active="defaultActive"
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
import { defineComponent, ref, watch } from 'vue';
import store from '@/store';
import SidebarItemVue from './SidebarItem.vue';
import { useRoute } from 'vue-router';

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

    // 默认展开项
    const route = useRoute();
    const menu = isActive(menuList, route.path);
    const defaultActive = ref(menu.url);

    function isActive(menuList: any, path: string): any {
      for (const item of menuList) {
        if (item?.children) {
          const menu = isActive(item.children, path);
          if (menu) {
            return menu;
          }
        } else if (item.type !== 1 && path === item.url) {
          return item;
        }
      }
    }

    return {
      menuList,
      defaultActive
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
