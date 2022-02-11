/*
 * @Author: Do not edit
 * @Date: 2022-01-11 14:13:10
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-02-11 16:26:49
 * @FilePath: \vue3-ts-init\src\main.ts
 */
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store, { setupStore } from './store';
import plugins from './plugins';
import 'normalize.css';

const app = createApp(App);

app.use(router);
app.use(store);
app.use(plugins);
setupStore();

app.mount('#app');
