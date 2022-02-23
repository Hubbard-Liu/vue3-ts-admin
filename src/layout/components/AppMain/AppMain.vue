<!--
 * @Author: Do not edit
 * @Date: 2022-02-16 16:28:41
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-02-23 14:09:14
 * @FilePath: \vue3-ts-init\src\layout\components\AppMain\AppMain.vue
-->
<template>
  <div class="AppMain">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppMain',
  setup() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.AppMain {
  display: flex;
  justify-content: center;
  padding: 10px;
  width: 100%;
  height: calc(100vh - $navbarHeight);
  background-color: #fff;
  overflow: hidden;
}
</style>
