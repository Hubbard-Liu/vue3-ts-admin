<!--
 * @Author: Do not edit
 * @Date: 2022-02-16 16:28:57
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-03-15 16:50:27
 * @FilePath: \vue3-ts-init\src\layout\components\Navbar\Navbar.vue
-->
<template>
  <div class="Navbar">
    <div class="Navbar-left">
      <el-icon :size="24" @click="handleCheck">
        <expand v-if="isCollapse" />
        <fold v-else />
      </el-icon>

      <navbar-breadcrumb></navbar-breadcrumb>
    </div>

    <div>
      <navbar-right-item></navbar-right-item>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import NavbarRightItem from './NavbarRightItem.vue';
import NavbarBreadcrumb from './NavbarBreadcrumb.vue';

export default defineComponent({
  name: 'Navbar',
  components: { NavbarRightItem, NavbarBreadcrumb },
  emits: ['handleCollapseChange'],
  setup(props, { emit }) {
    const isCollapse = ref(true);

    const handleCheck = () => {
      isCollapse.value = !isCollapse.value;
      emit('handleCollapseChange', isCollapse.value);
    };

    return {
      isCollapse,
      handleCheck
    };
  }
});
</script>

<style lang="scss" scoped>
.Navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: auto;
  height: $navbarHeight;
  background-color: #fff;
  padding: 0 10px;
  z-index: 99999;

  &-left {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.el-icon {
  cursor: pointer;
}
</style>
