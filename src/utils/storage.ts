/*
 * @Author: Do not edit
 * @Date: 2022-02-08 14:15:41
 * @LastEditors: Liuyu
 * @LastEditTime: 2022-02-23 21:12:45
 * @FilePath: /vue3-ts-init/src/utils/storage.ts
 */
// 默认缓存期限
const DEFAULT_CACHE_TIME = 1000 * 60 * 60 * 24 * 7;
// 默认前缀
const PREFIX_KEY = 'Admin';
// 默认localStorage
const storage = window.localStorage;

/**
 * 本地存储
 * localStorage | sessionStorage
 * 存储参数格式 @param { value: 参数, expire: 过期时间 }
 */

class Storage {
  // 默认前缀key拼接
  getKey(key: string) {
    return `${PREFIX_KEY}_${key}`;
  }

  set(key: string, value: any, expire: number | null = DEFAULT_CACHE_TIME) {
    // 是否加密
    const cacheData = JSON.stringify({
      value,
      expire: expire !== null ? new Date().getTime() + expire : null
    });
    storage.setItem(this.getKey(key), cacheData);
  }

  get(key: string) {
    const cacheData = storage.getItem(this.getKey(key));
    if (cacheData) {
      try {
        const { value, expire } = JSON.parse(cacheData);

        // 判断当前时间与存储的时间是否过期
        if (Date.now() <= expire || expire === null) {
          return value;
        }
        this.remove(key);
        return null;
      } catch (err) {
        return null;
      }
    }
  }

  remove(key: string) {
    storage.removeItem(this.getKey(key));
  }

  clearUserInfo() {
    storage.removeItem(this.getKey('token'));
    storage.removeItem(this.getKey('userInfo'));
    storage.removeItem(this.getKey('userMenu'));
  }

  clear() {
    storage.clear();
  }
}

export default new Storage();
