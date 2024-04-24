import axiosClient from "./apiClient";
class UserApi {
    createProfile = (params,accessToken) => {
        const url = '/user/create-task';
        const headers = {
            Authorization: `Bearer ${accessToken}`
        }
        return axiosClient.post(url,{headers},{params});
    }
    getProfile = (userId) => {
        const url = `/user/profile/${userId}`;
        return axiosClient.get(url);
    }
    getUser = (accessToken) => {
        const url = `/user`;
        const headers = {
            Authorization: `Bearer ${accessToken}`
        }
        return axiosClient.get(url,{headers});
    }

    updateProfile = (updateProfileDTO,accessToken) => {
        const url = '/user/updateProfile';
        const headers = {
            Authorization: `Bearer ${accessToken}`
         };
        return axiosClient.put(url,updateProfileDTO,{headers})
    }
    updateAvatar = (file,accessToken) => {
        const url = '/user/updateAvatar';
        const headers = {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'multipart/form-data'
        };
        const formData = new FormData();
            formData.append('file', file);
        return axiosClient.put(url, formData, { headers });
    }

    getAllUser = (accessToken) => {
        const url = '/user/users';
        const headers = {
            Authorization: `Bearer ${accessToken}`
        };
        return axiosClient.get(url, {headers});
    };
}
const userApi = new UserApi();
export default userApi;