import axiosClient from "./apiClient";

class AuthApi {
    login = (params) => {
        const url = '/auth/login';
        return axiosClient.post(url, params);
    }

    register = (params) => {
        const url = '/auth/register';
        return axiosClient.post(url, params );
    };
    logout = () => {
        const url = '/auth/logout';
        return axiosClient.post(url,null);
    }
}

const authApi = new AuthApi();
export default authApi;
