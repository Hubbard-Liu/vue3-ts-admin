/*
 * @Author: Do not edit
 * @Date: 2022-02-09 14:00:15
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-03-01 10:36:04
 * @FilePath: \vue3-ts-init\src\store\modules\user\user.ts
 */
import { ActionContext } from 'vuex';
import { IStore } from '@/store/modules/types';
import type { userInfoType, stateUserType } from './userType';
import { API_Login } from '@/api/login/login'; // API_Menu
import { loginType } from '@/api/login/loginType';
import storage from '@/utils/storage';
import formatRouter from '@/utils/formatRouter';
import router from '@/router';
import layout from '@/layout/index.vue';

// 用户信息
const getDefaultState = (): stateUserType => {
  return {
    token: '',
    userInfo: {},
    userMenu: []
  };
};

const state = getDefaultState();

// 提交修改
const mutations = {
  // 重置状态
  RESET_STATE: (state: stateUserType) => {
    Object.assign(state, getDefaultState());
  },
  // 设置本地token
  SET_TOKEN: (state: stateUserType, token: string) => {
    state.token = token;
  },
  // 存储用户信息
  SET_USER_INFO: (state: stateUserType, userInfo: userInfoType) => {
    state.userInfo = userInfo;
  },
  // 菜单权限
  SET_USER_MENU: (state: stateUserType, userMenu: any[]) => {
    state.userMenu = userMenu;
  }
};

const actions = {
  loadLocalLogin({ commit }: ActionContext<stateUserType, IStore>) {
    try {
      const token: string = storage.get('token');
      const userInfo: userInfoType = storage.get('userInfo');
      commit('SET_TOKEN', token);
      commit('SET_USER_INFO', userInfo);
    } catch (err) {
      commit('RESET_STATE');
      return Promise.reject(err);
    }
  },

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

      // 获取菜单
      return Promise.resolve(res);
    } catch (err) {
      return Promise.reject(err);
    }
  },

  // 菜单权限
  async getMenu({ commit }: ActionContext<stateUserType, IStore>) {
    return new Promise<void>((resolve, reject) => {
      try {
        // const { data: res } = await API_Menu();
        const res = [
          {
            id: 38,
            name: '系统总览',
            type: 1,
            url: '/main/analysis',
            icon: 'el-icon-monitor',
            sort: 1,
            children: [
              {
                id: 39,
                url: '/main/analysis/overview',
                name: '核心技术',
                sort: 106,
                type: 2,
                children: null,
                parentId: 38
              },
              {
                id: 40,
                url: '/main/analysis/dashboard',
                name: '商品统计',
                sort: 107,
                type: 2,
                children: null,
                parentId: 38
              }
            ]
          },
          {
            id: 1,
            name: '系统管理',
            type: 1,
            url: '/main/system',
            icon: 'el-icon-setting',
            sort: 2,
            children: [
              {
                id: 2,
                url: '/main/system/user',
                name: '用户管理',
                sort: 100,
                type: 2,
                children: [
                  {
                    id: 5,
                    url: null,
                    name: '创建用户',
                    sort: null,
                    type: 3,
                    parentId: 2,
                    permission: 'system:users:create'
                  },
                  {
                    id: 6,
                    url: null,
                    name: '删除用户',
                    sort: null,
                    type: 3,
                    parentId: 2,
                    permission: 'system:users:delete'
                  },
                  {
                    id: 7,
                    url: null,
                    name: '修改用户',
                    sort: null,
                    type: 3,
                    parentId: 2,
                    permission: 'system:users:update'
                  },
                  {
                    id: 8,
                    url: null,
                    name: '查询用户',
                    sort: null,
                    type: 3,
                    parentId: 2,
                    permission: 'system:users:query'
                  }
                ],
                parentId: 1
              },
              {
                id: 3,
                url: '/main/system/department',
                name: '部门管理',
                sort: 101,
                type: 2,
                children: [
                  {
                    id: 17,
                    url: null,
                    name: '创建部门',
                    sort: null,
                    type: 3,
                    parentId: 3,
                    permission: 'system:department:create'
                  },
                  {
                    id: 18,
                    url: null,
                    name: '删除部门',
                    sort: null,
                    type: 3,
                    parentId: 3,
                    permission: 'system:department:delete'
                  },
                  {
                    id: 19,
                    url: null,
                    name: '修改部门',
                    sort: null,
                    type: 3,
                    parentId: 3,
                    permission: 'system:department:update'
                  },
                  {
                    id: 20,
                    url: null,
                    name: '查询部门',
                    sort: null,
                    type: 3,
                    parentId: 3,
                    permission: 'system:department:query'
                  }
                ],
                parentId: 1
              },
              {
                id: 4,
                url: '/main/system/menu',
                name: '菜单管理',
                sort: 103,
                type: 2,
                children: [
                  {
                    id: 21,
                    url: null,
                    name: '创建菜单',
                    sort: null,
                    type: 3,
                    parentId: 4,
                    permission: 'system:menu:create'
                  },
                  {
                    id: 22,
                    url: null,
                    name: '删除菜单',
                    sort: null,
                    type: 3,
                    parentId: 4,
                    permission: 'system:menu:delete'
                  },
                  {
                    id: 23,
                    url: null,
                    name: '修改菜单',
                    sort: null,
                    type: 3,
                    parentId: 4,
                    permission: 'system:menu:update'
                  },
                  {
                    id: 24,
                    url: null,
                    name: '查询菜单',
                    sort: null,
                    type: 3,
                    parentId: 4,
                    permission: 'system:menu:query'
                  }
                ],
                parentId: 1
              },
              {
                id: 25,
                url: '/main/system/role',
                name: '角色管理',
                sort: 102,
                type: 2,
                children: [
                  {
                    id: 26,
                    url: null,
                    name: '创建角色',
                    sort: null,
                    type: 3,
                    parentId: 25,
                    permission: 'system:role:create'
                  },
                  {
                    id: 27,
                    url: null,
                    name: '删除角色',
                    sort: null,
                    type: 3,
                    parentId: 25,
                    permission: 'system:role:delete'
                  },
                  {
                    id: 28,
                    url: null,
                    name: '修改角色',
                    sort: null,
                    type: 3,
                    parentId: 25,
                    permission: 'system:role:update'
                  },
                  {
                    id: 29,
                    url: null,
                    name: '查询角色',
                    sort: null,
                    type: 3,
                    parentId: 25,
                    permission: 'system:role:query'
                  }
                ],
                parentId: 1
              }
            ]
          },
          {
            id: 9,
            name: '商品中心',
            type: 1,
            url: '/main/product',
            icon: 'el-icon-goods',
            sort: 3,
            children: [
              {
                id: 15,
                url: '/main/product/category',
                name: '商品类别',
                sort: 104,
                type: 2,
                children: [
                  {
                    id: 30,
                    url: null,
                    name: '创建类别',
                    sort: null,
                    type: 3,
                    parentId: 15,
                    permission: 'system:category:create'
                  },
                  {
                    id: 31,
                    url: null,
                    name: '删除类别',
                    sort: null,
                    type: 3,
                    parentId: 15,
                    permission: 'system:category:delete'
                  },
                  {
                    id: 32,
                    url: null,
                    name: '修改类别',
                    sort: null,
                    type: 3,
                    parentId: 15,
                    permission: 'system:category:update'
                  },
                  {
                    id: 33,
                    url: null,
                    name: '查询类别',
                    sort: null,
                    type: 3,
                    parentId: 15,
                    permission: 'system:category:query'
                  }
                ],
                parentId: 9
              },
              {
                id: 16,
                url: '/main/product/goods',
                name: '商品信息',
                sort: 105,
                type: 2,
                children: [
                  {
                    id: 34,
                    url: null,
                    name: '创建商品',
                    sort: null,
                    type: 3,
                    parentId: 16,
                    permission: 'system:goods:create'
                  },
                  {
                    id: 35,
                    url: null,
                    name: '删除商品',
                    sort: null,
                    type: 3,
                    parentId: 16,
                    permission: 'system:goods:delete'
                  },
                  {
                    id: 36,
                    url: null,
                    name: '修改商品',
                    sort: null,
                    type: 3,
                    parentId: 16,
                    permission: 'system:goods:update'
                  },
                  {
                    id: 37,
                    url: null,
                    name: '查询商品',
                    sort: null,
                    type: 3,
                    parentId: 16,
                    permission: 'system:goods:query'
                  }
                ],
                parentId: 9
              }
            ]
          },
          {
            id: 41,
            name: '随便聊聊',
            type: 1,
            url: '/main/story',
            icon: 'el-icon-chat-line-round',
            sort: 4,
            children: [
              {
                id: 42,
                url: '/main/story/chat',
                name: '你的故事',
                sort: 108,
                type: 2,
                children: null,
                parentId: 41
              },
              {
                id: 43,
                url: '/main/story/list',
                name: '故事列表',
                sort: 109,
                type: 2,
                children: [],
                parentId: 41
              }
            ]
          }
        ];

        // 路由表处理
        const routeList = formatRouter(res);

        // 合并路由
        routeList.forEach((item) => {
          router.addRoute('main', item);
        });

        // 最后动态添加404跳转,静态添加的404有优先权导致直接匹配不到就404
        router.addRoute({
          path: '/:pathMatch(.*)*',
          redirect: '/404',
          name: '404'
        });

        // 生成动态menu
        commit('SET_USER_MENU', res);

        resolve();
      } catch (err) {
        reject(err);
      }
    });
  },

  // 退出登录
  logout({ commit }: ActionContext<stateUserType, IStore>) {
    return new Promise<void>((resolve, reject) => {
      try {
        commit('RESET_STATE');
        storage.clearUserInfo();
        // 清空权限
        // https://router.vuejs.org/zh/guide/advanced/dynamic-routing.html#%E5%88%A0%E9%99%A4%E8%B7%AF%E7%94%B1
        router.addRoute({
          name: 'main',
          path: '/main',
          component: layout,
          children: []
        });
        resolve();
      } catch (error) {
        reject(error);
      }
    });
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
