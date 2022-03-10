<!--
 * @Author: Do not edit
 * @Date: 2022-02-16 16:28:41
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-03-10 09:29:29
 * @FilePath: \vue3-ts-init\src\layout\components\AppMain\AppMain.vue
-->
<template>
  <div class="AppMain">
    <div class="AppMain-content">
      <el-config-provider :locale="locale">
        <router-view></router-view>
      </el-config-provider>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ElConfigProvider } from 'element-plus'; // 国际化支持
import zhCn from 'element-plus/lib/locale/lang/zh-cn';

export default defineComponent({
  name: 'AppMain',
  components: {
    ElConfigProvider
  },
  setup() {
    return {
      locale: zhCn
    };
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

  &-content {
    width: 100%;
  }
}
</style>
