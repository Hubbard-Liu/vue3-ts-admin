/*
 * @Author: Do not edit
 * @Date: 2022-02-09 14:00:15
 * @LastEditors: Liuyu
 * @LastEditTime: 2022-02-10 17:15:48
 * @FilePath: \vue3-ts-init\src\store\modules\user\user.ts
 */
import { ActionContext } from 'vuex';
import { IStore } from '@/store/modules/types';
import type { userInfoType, stateUserType } from './userType';
import { API_Login } from '@/api/login/login';
import { loginType } from '@/api/login/loginType';
import storage from '@/utils/storage';

// 用户信息
const getDefaultState = (): stateUserType => {
  return {
    token: '',
    userInfo: {}
  };
};

const state = getDefaultState();

// 提交修改
const mutations = {
  // 设置本地token
  SET_TOKEN: (state: stateUserType, token: string) => {
    state.token = token;
  },
  // 存储用户信息
  SET_USER_INFO: (state: stateUserType, userInfo: userInfoType) => {
    state.userInfo = userInfo;
  }
};

const actions = {
  // 请求登录
  async login(
    { commit }: ActionContext<stateUserType, IStore>,
    payload: loginType
  ) {
    try {
      // 设置token
      const { data: res } = await API_Login(payload);
      const { token, name, id } = res;
      commit('SET_TOKEN', token);
      storage.set('token', token); // 本地存储

      // 设置用户信息
      const userInfo = { name, id };
      commit('SET_USER_INFO', userInfo);
      storage.set('userInfo', userInfo);
      return Promise.resolve(res);
    } catch (err) {
      return Promise.reject(err);
    }
  }
};

const getters = {};

export default {
  namespaced: true, // 带命名空间的模块 调用方法时带前缀 dispatch('user/login', 登入信息)
  state,
  mutations,
  actions,
  getters
};
