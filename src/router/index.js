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
//此时这个函数的作用域链是在全局，this指向全局windows
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
//重写push方法
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        //要把this应用到VueRouter上
        originPush.call(this, location, resolve, reject)
    }
    else {
        originPush.call(this, location, () => { }, () => { })
    }
}

VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject)
    }
    else {
        originReplace.call(this, location, () => { }, () => { })
    }
}

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