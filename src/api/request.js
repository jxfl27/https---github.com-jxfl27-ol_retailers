//二次封装
import axios from "axios"
//引入进度条,是一个对象
//start开始，done结束
import nProgress from "nprogress"
import 'nprogress/nprogress.css';

const requests = axios.create({
    //基础路径
    baseURL: "api",
    //请求响应时间
    timeout: 5000,
})

//请求拦截器
requests.interceptors.request.use((config) => {
    //config配置对象
    nProgress.start();
    return config
})

//响应拦截器
requests.interceptors.response.use((res) => {
    nProgress.done()
    return res.data
}, (error) => {
    //相应失败回调函数
    return Promise.reject(new Error('faile'));
})

export default requests