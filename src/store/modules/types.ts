/*
 * @Author: Do not edit
 * @Date: 2022-02-09 15:09:02
 * @LastEditors: Liuyu
 * @LastEditTime: 2022-02-10 17:20:56
 * @FilePath: \vue3-ts-init\src\store\modules\types.ts
 */
// 模块类型集合
import { stateUserType } from './user/userType';
// 这是我们的模块对象 modules: { foo, user }
import modules from './index';

export interface IStore {
  user: stateUserType;
}

// 提取模块 getters ---------------------------------------------------------

// 取出各个模块里面的 getters 属性
type GetGetter<M> = M extends { getters: infer G } ? G : unknown;
type GetGetters<Ms> = {
  [K in keyof Ms]: GetGetter<Ms[K]>;
};
type getters = GetGetters<typeof modules>;

// 提取成 ['user/isTrue', 'foo/tenfold']
type addPrefix<K, N> = `${K & string}/${N & string}`;
type MergeKey<Getters> = {
  [K in keyof Getters]: addPrefix<K, keyof Getters[K]>;
}[keyof Getters];

// 提取成
// type ModuleGetters = {
//   "user/isTrue": (state: {
//      flag: boolean;
//   }) => boolean;
//   "foo/tenfold": (state: {
//       count: number;
//   }) => number;
// }
type GetFn<T, A, B> = T[A & keyof T][B & keyof T[A & keyof T]]; // 这里只能一级一级的传下去
type GetFinalKey<T> = {
  [K in MergeKey<T>]: K extends `${infer A}/${infer B}`
    ? GetFn<T, A, B>
    : unknown;
};
type ModuleGetters = GetFinalKey<getters>;

// 最后实现
// type Getters = {
//   "user/isTrue": boolean;
//   "foo/tenfold": number;
// }
type modulesGetters = {
  [K in keyof ModuleGetters]: ReturnType<ModuleGetters[K]>;
};

// 模块中的getter提取
export { modulesGetters };
