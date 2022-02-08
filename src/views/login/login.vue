<!--
 * @Author: Do not edit
 * @Date: 2022-01-13 10:01:16
 * @LastEditors: Liuyu
 * @LastEditTime: 2022-02-08 17:35:51
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
          <account-number></account-number>
          <el-row justify="center" style="margin-top: 15px">
            <el-col :span="5">
              <el-button type="primary">登录</el-button>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane>
          <template #label>
            <span>
              <el-icon><Message /></el-icon>
              <span style="margin-left: 10px">Phone</span>
            </span>
          </template>
          <account-phone></account-phone>
          <el-row justify="center">
            <el-col :span="5">
              <el-button type="primary">登录</el-button>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Avatar, Message } from '@element-plus/icons-vue';
import accountNumber from '@/views/login/components/account-number.vue';
import accountPhone from '@/views/login/components/account-phone.vue';

export default defineComponent({
  name: 'login',
  components: {
    Avatar,
    Message,
    accountNumber,
    accountPhone
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

  &-avatar {
    display: flex;
    justify-content: center;
  }

  &-content {
    margin: 25vh auto;
    width: 350px;
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
