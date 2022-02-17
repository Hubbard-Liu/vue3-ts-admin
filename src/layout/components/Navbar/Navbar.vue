<!--
 * @Author: Do not edit
 * @Date: 2022-02-16 16:28:57
 * @LastEditors: Liuyu
 * @LastEditTime: 2022-02-17 23:08:12
 * @FilePath: /vue3-ts-init/src/layout/components/Navbar/Navbar.vue
-->
<template>
  <div class="Navbar">
    <el-icon :size="24" @click="handleCheck">
      <expand v-if="isCollapse" />
      <fold v-else />
    </el-icon>

    <div>个人信息</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Expand, Fold } from '@element-plus/icons-vue';

export default defineComponent({
  name: 'Navbar',
  components: { Expand, Fold },
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
  height: 50px;
  padding: 0 10px;
  box-shadow: 0 1px 2px 0 rgba($color: #000000, $alpha: 0.1);
}
</style>
