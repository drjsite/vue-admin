import Vue from 'vue'
import Router from 'vue-router'
import login from './views/login.vue'
import home from './views/home.vue'

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/login",
            name: "login",
            component: login
        },
        {
            path: "/home",
            name: "home",
            component: home
        }
    ]
})
