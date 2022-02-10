/*
 * @Author: Do not edit
 * @Date: 2022-01-11 15:08:32
 * @LastEditors: Liuyu
 * @LastEditTime: 2022-02-10 17:25:43
 * @FilePath: \vue3-ts-init\src\store\index.ts
 */
import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';
import modules from '@/store/modules';
import getters from './getters';
import { RootGetters } from './getters';
import { IStore } from './modules/types';

// 定义 injection key
// 参考官网 https://vuex.vuejs.org/zh/guide/typescript-support.html#%E7%AE%80%E5%8C%96-usestore-%E7%94%A8%E6%B3%95
export const key: InjectionKey<Store<IStore>> = Symbol();

const store = createStore<IStore>({
  modules,
  getters
});

// 定义自己的 `useStore` 组合式函数
export function useStore() {
  const { state, getters, commit, dispatch } = baseUseStore(key);
  return {
    state,
    getters: getters as RootGetters,
    commit,
    dispatch
  };
}

// 导出的 store 在组件中使用 可以得到类型化的 如：store.state.user ...
export default store;
