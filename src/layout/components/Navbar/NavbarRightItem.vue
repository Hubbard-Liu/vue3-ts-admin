<!--
 * @Author: Do not edit
 * @Date: 2022-02-23 15:10:00
 * @LastEditors: Liuyu
 * @LastEditTime: 2022-02-23 21:45:12
 * @FilePath: /vue3-ts-init/src/layout/components/Navbar/NavbarRightItem.vue
-->
<template>
  <div class="NavbarRightItem">
    <el-button @click="handleLogout">退出</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import store from '@/store';
import { ElMessage } from 'element-plus';
import router from '@/router';

export default defineComponent({
  name: 'NavbarRightItem',
  setup() {
    const handleLogout = async () => {
      await store.dispatch('user/logout');
      ElMessage.success('登出成功!');
      router.replace(`/login`);
    };

    return {
      handleLogout
    };
  }
});
</script>

<style lang="scss"></style>
