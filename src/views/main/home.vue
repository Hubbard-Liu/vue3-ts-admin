<!--
 * @Author: Do not edit
 * @Date: 2022-01-13 10:10:49
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-02-11 16:57:05
 * @FilePath: \vue3-ts-init\src\views\main\home.vue
-->
<template>
  <div class="common-layout">
    <el-container style="height: 100vh">
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'home',
  setup() {
    return {};
  }
});
</script>

<style lang="scss">
.common-layout .el-header,
.common-layout .el-footer {
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 60px;
}
.common-layout .el-footer {
  line-height: 60px;
}

.common-layout .el-aside {
  background-color: #d3dce6;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 200px;
}

.common-layout .el-main {
  background-color: #e9eef3;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 160px;
}
</style>
