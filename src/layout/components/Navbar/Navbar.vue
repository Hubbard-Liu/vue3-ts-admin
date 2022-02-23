<!--
 * @Author: Do not edit
 * @Date: 2022-02-16 16:28:57
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-02-23 15:10:55
 * @FilePath: \vue3-ts-init\src\layout\components\Navbar\Navbar.vue
-->
<template>
  <div class="Navbar">
    <el-icon :size="24" @click="handleCheck">
      <expand v-if="isCollapse" />
      <fold v-else />
    </el-icon>
    <div>
      <NavbarRightItem></NavbarRightItem>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import NavbarRightItem from './NavbarRightItem.vue';

export default defineComponent({
  name: 'Navbar',
  components: { NavbarRightItem },
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
  height: $navbarHeight;
  background-color: #fff;
  padding: 0 10px;
}

.el-icon {
  cursor: pointer;
}
</style>
