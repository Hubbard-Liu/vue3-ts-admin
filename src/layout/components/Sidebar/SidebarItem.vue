<!--
 * @Author: Do not edit
 * @Date: 2022-02-20 15:41:13
 * @LastEditors: Liuyu
 * @LastEditTime: 2022-02-20 16:26:10
 * @FilePath: /vue3-ts-init/src/layout/components/Sidebar/SidebarItem.vue
-->
<template>
  <el-sub-menu :index="`${menuItem.url}`">
    <template #title>
      <el-icon>
        <!-- icon的使用 component 动态注册 -->
        <component :is="format(menuItem.icon)" />
      </el-icon>
      <span>{{ menuItem.name }}</span>
    </template>

    <template v-if="menuItem.children">
      <el-menu-item
        v-for="item in menuItem.children"
        :index="`${item.url}`"
        :key="item.id"
      >
        <el-icon>
          <component :is="'menu'" />
        </el-icon>
        {{ item.name }}</el-menu-item
      >
    </template>
  </el-sub-menu>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SidebarItem',
  props: {
    menuItem: {
      type: Object,
      required: true
    }
  },
  setup() {
    const format = (icon: string) => {
      return icon.replace(/el-icon-/g, '');
    };

    return {
      format
    };
  }
});
</script>
