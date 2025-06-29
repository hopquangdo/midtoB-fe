import axios from 'axios';
import queryString from 'query-string';
import {BACK_END_URL} from "../../constants/baseConstant";
const axiosClient = axios.create({
    baseURL: `${BACK_END_URL}/api/v1`,
    headers: {
        'content-type': 'application/json',
    },
    paramsSerializer: params => queryString.stringify(params),
});
axiosClient.interceptors.request.use(function (config){
    const token = localStorage.getItem('accessToken');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
}, function (error) {
    console.log(error);
    return Promise.reject(error);
});

axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }
    return response;
}, (error) => {
    throw error;
});

export default axiosClient;
