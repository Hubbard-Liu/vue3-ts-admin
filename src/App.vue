<!--
 * @Author: Do not edit
 * @Date: 2022-01-11 14:13:10
 * @LastEditors: Liuyu
 * @LastEditTime: 2022-02-16 21:43:11
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
@import '@/styles/index.scss';
</style>
