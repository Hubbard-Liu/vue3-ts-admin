<!--
 * @Author: Do not edit
 * @Date: 2022-01-13 10:01:16
 * @LastEditors: Liuyu
 * @LastEditTime: 2022-02-08 23:05:50
 * @FilePath: /vue3-ts-init/src/views/login/login.vue
-->
<template>
  <div class="login">
    <div class="login-content">
      <el-tabs v-model="tabName" class="login-card" type="border-card" stretch>
        <el-tab-pane name="login">
          <template #label>
            <span>
              <el-icon><avatar /></el-icon>
              <span style="margin-left: 10px">Login</span>
            </span>
          </template>
          <account-number></account-number>
        </el-tab-pane>
        <el-tab-pane name="phone">
          <template #label>
            <span>
              <el-icon><Message /></el-icon>
              <span style="margin-left: 10px">Phone</span>
            </span>
          </template>
          <account-phone></account-phone>
        </el-tab-pane>
      </el-tabs>
      <!-- 登录按钮 -->
      <el-row justify="center" style="margin-top: 12px">
        <el-col>
          <el-button
            type="primary"
            size="large"
            style="width: 100%"
            @click="handleLogin"
            >登录</el-button
          >
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
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
    const tabName = ref('login');

    //登录按钮
    function handleLogin() {
      if (tabName.value === 'login') {
        // 账号登录
      } else {
        //手机号登录
      }
    }
    return {
      tabName,
      handleLogin
    };
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
  }

  // &-card {
  //   height: 50vh;
  // }
}

.el-icon {
  vertical-align: -1px;
}
</style>
