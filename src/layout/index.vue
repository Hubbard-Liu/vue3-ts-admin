<!--
 * @Author: Do not edit
 * @Date: 2022-02-16 15:29:03
 * @LastEditors: Liuyu
 * @LastEditTime: 2022-02-20 17:22:33
 * @FilePath: /vue3-ts-init/src/layout/index.vue
-->
<template>
  <div class="layout" :class="{ hidden: !isCollapse }">
    <div class="layout-sidebar">
      <Sidebar :isCollapse="isCollapse"></Sidebar>
    </div>
    <div class="layout-main">
      <div class="layout-main-navbar">
        <Navbar @handleCollapseChange="handleChange"></Navbar>
      </div>
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

    const handleChange = (value: boolean) => {
      isCollapse.value = value;
    };

    return {
      handleChange,
      isCollapse
    };
  }
});
</script>

<style lang="scss" scoped>
.layout {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;

  &-sidebar {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    font-size: 0px;
    width: $sidebarWidth;
    height: 100%;
    transition: width 0.28s;
    overflow: hidden;
  }

  &-main {
    position: relative;
    top: 0;
    left: 0;
    width: calc(100% - $sidebarWidth);
    margin-left: $sidebarWidth;
    transition: width 0.28s, margin-left 0.28s;

    &-navbar {
      position: relative;
      box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
    }
  }
}

.layout.hidden {
  .layout-sidebar {
    width: 64px;
  }

  .layout-main {
    margin-left: 64px;
    width: calc(100% - 64px);
  }
}
</style>
