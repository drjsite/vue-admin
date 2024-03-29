import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'

import Mock from './mock'
Mock.init();

Vue.use(ElementUI);
Vue.prototype.axios = axios;
Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
