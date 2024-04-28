import axiosClient from "./apiClient";

class PostApi {
    createPost =  (formData) => {
        const url = '/post/createPost';
        const config = {
            headers: {
                'Authorization': axiosClient.defaults.headers.common['Authorization'],
                'Content-Type': 'multipart/form-data'
            }
        };
        return axiosClient.post(url, formData, config);
    };

    getAllPosts = () => {
        const url = '/post/';
        return axiosClient.get(url);
    }

    getPostDetail = (postId) => {
        const url = `/post/${postId}`;
        return axiosClient.get(url);
    }
}

const postApi = new PostApi();
export default postApi;
