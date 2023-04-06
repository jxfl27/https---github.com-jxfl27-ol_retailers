//API接口统一管理
import requests from "./request";

//三级联动接口
// 请求地址 /api/product/       getBaseCategoryList 请求方式GET

export const reqCatagoryList = () => requests({
    url: '/product/getBaseCategoryList',
    method: 'get',
})