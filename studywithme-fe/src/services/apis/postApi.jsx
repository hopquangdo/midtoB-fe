import axiosClient from "./apiClient";

class PostApi {
    createPost = (postData) => {
        const url = '/post/createPost';
        return axiosClient.post(url, postData);
    }

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
