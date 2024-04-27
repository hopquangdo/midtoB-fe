import axiosClient from "./apiClient";

class emotionLikeApi {
    likePost = (postId) => {
        const url = '/like';
        return axiosClient.post(url, { postId });
    }

    unlikePost = (postId) => {
        const url = '/like/unlike';
        return axiosClient.delete(url, { params: { postId } });
    };

    getTotalLikeForPost = (postId) => {
        const url = '/like/totalLike';
        return axiosClient.get(url, { params: { postId } });
    }
}

const emotionLikeApi = new emotionLikeApi();
export default emotionLikeApi;
