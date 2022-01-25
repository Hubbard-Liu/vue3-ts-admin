<!--
 * @Author: Do not edit
 * @Date: 2022-01-11 14:13:10
 * @LastEditors: Liuyu
 * @LastEditTime: 2022-01-22 20:34:18
 * @FilePath: /vue3-ts-init/src/App.vue
-->
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App'
});
</script>

<style lang="scss">
html,
body,
#app {
  width: 100%;
  height: 100%;
}
</style>
