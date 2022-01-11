/*
 * @Author: Do not edit
 * @Date: 2022-01-11 14:13:10
 * @LastEditors: Liuyu
 * @LastEditTime: 2022-01-11 15:53:00
 * @FilePath: \vue3-ts-init\src\main.ts
 */
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import plugins from './plugins';

const app = createApp(App);

app.use(router);
app.use(store);
app.use(plugins);

app.mount('#app');
