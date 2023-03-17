//配置路由
import Vue from 'vue';
import VueRouter from 'vue-router';
//使用插件
Vue.use(VueRouter);
//引入路由组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
//广播路由
export default new VueRouter({
    //配置路由
    routes: [
        {
            path: "/Home",
            component: Home
        },
        {
            path: "/Search",
            component: Search
        },
        {
            path: "/Login",
            component: Login
        },
        {
            path: "/Register",
            component: Register
        },
        {
            path: '*',
            redirect: "/Home"
        }
    ]
})