<!--
 * @Author: Do not edit
 * @Date: 2022-02-16 15:29:03
 * @LastEditors: Liuyu
 * @LastEditTime: 2022-02-16 22:00:54
 * @FilePath: /vue3-ts-init/src/layout/index.vue
-->
<template>
  <div class="layout">
    <div class="layout-sidebar">
      <Sidebar></Sidebar>
    </div>
    <div class="layout-main">
      <Navbar></Navbar>
      <AppMain></AppMain>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { AppMain, Navbar, Sidebar } from './components';

export default defineComponent({
  name: 'Layout',
  components: { AppMain, Navbar, Sidebar },
  setup() {
    return {};
  }
});
</script>

<style lang="scss">
.layout {
  @include clearfix;
  display: flex;
  width: 100%;
  height: 100%;

  &-sidebar {
    width: $sidebar-width;
    height: 100%;
    background: #384356;
  }

  &-main {
    width: calc(100% - $sidebar-width);
  }
}
</style>
