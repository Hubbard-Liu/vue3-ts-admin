<!--
 * @Author: Do not edit
 * @Date: 2022-02-16 15:29:03
 * @LastEditors: Liuyu
 * @LastEditTime: 2022-02-17 22:58:25
 * @FilePath: /vue3-ts-init/src/layout/index.vue
-->
<template>
  <div class="layout">
    <div :class="['layout-sidebar', !isCollapse ? 'layout-min-sidebar' : '']">
      <Sidebar :isCollapse="isCollapse"></Sidebar>
    </div>
    <div :class="[isCollapse ? 'layout-main' : 'layout-min-main']">
      <Navbar @handleCollapseChange="handleCollapseChange"></Navbar>
      <AppMain></AppMain>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { AppMain, Navbar, Sidebar } from './components';

export default defineComponent({
  name: 'Layout',
  components: { AppMain, Navbar, Sidebar },
  setup() {
    const isCollapse = ref(true);

    const handleCollapseChange = (value: boolean) => {
      isCollapse.value = value;
    };

    return {
      handleCollapseChange,
      isCollapse
    };
  }
});
</script>

<style lang="scss" scoped>
.layout {
  @include clearfix;
  display: flex;
  width: 100%;
  height: 100%;

  &-sidebar {
    width: $sidebar-width;
    height: 100%;
    background: #384356;
    transition: width 0.28s;
  }

  &-min-sidebar {
    width: 64px !important;
  }

  &-main {
    width: calc(100% - $sidebar-width);
    transition: width 0.28s;
  }

  &-min-main {
    width: calc(100% - 64px);
  }
}
</style>
