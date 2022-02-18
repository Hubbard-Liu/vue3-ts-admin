<!--
 * @Author: Do not edit
 * @Date: 2022-02-16 15:29:03
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-02-18 17:31:48
 * @FilePath: \vue3-ts-init\src\layout\index.vue
-->
<template>
  <div :class="['layout', !isCollapse ? 'hidden' : '']">
    <div class="layout-sidebar">
      <Sidebar :isCollapse="isCollapse"></Sidebar>
    </div>
    <div class="layout-main">
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
    width: $sidebar-width;
    height: 100%;
    transition: width 0.28s;
    overflow: hidden;
  }

  &-main {
    position: relative;
    top: 0;
    left: 0;
    width: calc(100% - $sidebar-width);
    margin-left: $sidebar-width;
    transition: all 0.28s;
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
