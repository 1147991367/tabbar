import Vue from 'vue'
import VueRouter from 'vue-router'
const home = () =>
    import ('../views/Home/Home.vue');
const about = () =>
    import ('../views/About/About.vue');
const list = () =>
    import ('../views/List/List.vue');
const profile = () =>
    import ('../views/Profile/Profile.vue');
Vue.use(VueRouter)

const routes = [
    { path: '', redirect: '/home' },
    { path: '/home', component: home },
    { path: '/about', component: about },
    { path: '/list', component: list },
    { path: '/profile', component: profile }
]

const router = new VueRouter({
    routes
})

export default router