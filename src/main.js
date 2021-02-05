/**
 * NOTE - This file only exists for development purpose.
 * It will help me to run and test the form
 */

import Vue, { createApp } from 'vue';
import App from './App.vue'
import {VueFormBuilderPlugin} from "@/index";


const app = createApp(App).use(VueFormBuilderPlugin);
app.mount('#app');

/// Vue.use(VueFormBuilderPlugin)

/// new Vue({
///   render: h => h(App)
/// }).$mount('#app')
