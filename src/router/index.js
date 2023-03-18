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
    //配置路由组件
    routes: [
        {
            path: "/Home",
            component: Home,
            meta: { show: true }
        },
        {
            //为params占位
            path: "/Search/:keyword?",
            component: Search,
            meta: { show: true },
            name: "Search",
            //props: true,'
            // props: {
            //     a: 1,
            //     b: 2
            // }
            props: ($route) => {
                return {
                    keyword: $route.params.keyword,
                    k: $route.query.k,
                }
            }
        },
        {
            path: "/Login",
            component: Login,
            meta: { show: false }
        },
        {
            path: "/Register",
            component: Register,
            meta: { show: false }
        },
        {
            path: '*',
            redirect: "/Home"
        }
    ]
})