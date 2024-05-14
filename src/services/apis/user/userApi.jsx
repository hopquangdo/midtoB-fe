import axiosClient from "../apiClient";
class UserApi {
    createProfile = (params) => {
        const url = '/user/create-task';
        return axiosClient.post(url,{params});
    }
    getProfile = (userId) => {
        const url = `/user/profile/${userId}`;
        return axiosClient.get(url);
    }
    getUser = (accessToken) => {
        const url = `/user`;
        return axiosClient.get(url);
    }

    updateProfile = (updateProfileDTO) => {
        const url = '/user/updateProfile';
        return axiosClient.put(url,updateProfileDTO)
    }
    updateAvatar = (file) => {
        const url = '/user/updateAvatar';
        const formData = new FormData();
            formData.append('file', file);
        return axiosClient.put(url, formData);
    }

    getAllUser = () => {
        const url = '/user/users';
        return axiosClient.get(ur );
    };
}
const userApi = new UserApi();
export default userApi;