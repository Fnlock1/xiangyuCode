import axios from 'axios';

// 创建 axios 实例
const service = axios.create({
    // baseURL: 'https://api.example.com', // 基础 API 地址
    timeout: 5000, // 请求超时时间
});

// 请求拦截器
service.interceptors.request.use(
    config => {
        // const token = localStorage.getItem('token');
        // if (token) {
        //     config.headers['Authorization'] = `Bearer ${token}`; // 携带 token
        // }
        return config;
    },
    error => Promise.reject(error)
);

// 响应拦截器
service.interceptors.response.use(
    response => response.data, // 直接返回响应数据
    error => {
        alert(error.message || 'Request Error');
        return Promise.reject(error);
    }
);

// 通用的请求方法
export const request = (url, method = 'get', data = {}, params = {}) => {
    // 如果是 GET/DELETE 请求，使用 params，否则使用 data
    const config = {
        url,
        method,
    };

    if (['get', 'delete'].includes(method.toLowerCase())) {
        config.params = data; // GET/DELETE 请求时使用 data 作为 params
    } else {
        config.data = data; // POST/PUT/PATCH 请求时使用 data
    }

    if (Object.keys(params).length > 0) {
        config.params = params; // 如果明确传递了 params，则覆盖默认的配置
    }

    return service(config);
};