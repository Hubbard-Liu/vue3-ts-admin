<!--
 * @Author: Do not edit
 * @Date: 2022-03-15 16:48:38
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-03-15 16:58:20
 * @FilePath: \vue3-ts-init\src\layout\components\Navbar\NavbarBreadcrumb.vue
-->
<template>
  <div class="NavbarBreadcrumb">
    <el-breadcrumb separator-icon="ArrowRight" style="margin-left: 14px">
      <template v-for="item in menuPath" :key="item.id">
        <!-- 面包屑导航 -->
        <el-breadcrumb-item :to="{ path: item.path }">{{
          item.name
        }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import store from '@/store';
import { useRoute } from 'vue-router';
import { formatMenuPath } from '@/utils/formatRouter';

export default defineComponent({
  name: 'NavbarBreadcrumb',
  setup() {
    const route = useRoute();

    const menuPath = computed(() => {
      return formatMenuPath(store.getters.userMenu, route.fullPath);
    });

    return {
      menuPath
    };
  }
});
</script>

<style lang="scss"></style>
