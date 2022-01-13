<!--
 * @Author: Do not edit
 * @Date: 2022-01-13 10:01:16
 * @LastEditors: Liuyu
 * @LastEditTime: 2022-01-13 16:19:08
 * @FilePath: \vue3-ts-init\src\views\login\login.vue
-->
<template>
  <div class="login">
    <div class="login-content">
      <el-tabs class="login-card" type="border-card" stretch>
        <el-tab-pane>
          <template #label>
            <span>
              <el-icon><avatar /></el-icon>
              <span style="margin-left: 10px">Login</span>
            </span>
          </template>
          <div>12321</div>
        </el-tab-pane>
        <el-tab-pane>
          <template #label>
            <span>
              <el-icon><Message /></el-icon>
              <span style="margin-left: 10px">Phone</span>
            </span>
          </template>
          <div>12321</div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Avatar, Message } from '@element-plus/icons-vue';

export default defineComponent({
  name: 'login',
  components: {
    Avatar,
    Message
  },
  setup() {
    return {};
  }
});
</script>

<style lang="scss">
.login {
  height: 100vh;
  background-color: #f5f5f5;
  overflow: hidden;

  &-content {
    margin: 25vh auto;
    width: 40vw;
    background-color: #fff;
  }

  &-card {
    height: 50vh;
  }
}

.el-icon {
  vertical-align: -1px;
}
</style>
