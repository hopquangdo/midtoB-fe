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
    logout = (accessToken) => {
        const url = '/auth/logout';
        const headers = {
            Authorization: `Bearer ${accessToken}`
        };
        return axiosClient.post(url,null, { headers });
    }
}

const authApi = new AuthApi();
export default authApi;
