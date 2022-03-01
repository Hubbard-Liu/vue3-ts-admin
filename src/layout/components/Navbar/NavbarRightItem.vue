<!--
 * @Author: Do not edit
 * @Date: 2022-02-23 15:10:00
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-03-01 10:40:15
 * @FilePath: \vue3-ts-init\src\layout\components\Navbar\NavbarRightItem.vue
-->
<template>
  <div class="NavbarRightItem">
    <el-button @click="handleLogout">退出</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import store from '@/store';
import { useRouter, useRoute } from 'vue-router';
import { ElMessage } from 'element-plus';

export default defineComponent({
  name: 'NavbarRightItem',
  setup() {
    const route = useRoute();
    const router = useRouter();

    const handleLogout = async () => {
      await store.dispatch('user/logout');
      ElMessage.success('登出成功!');
      // 退出
      router.replace({
        path: `/login`,
        query: {
          redirect: route.fullPath
        }
      });
      router.removeRoute('404');
    };

    return {
      handleLogout
    };
  }
});
</script>

<style lang="scss"></style>
