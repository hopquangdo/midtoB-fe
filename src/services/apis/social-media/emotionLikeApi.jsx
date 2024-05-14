import axiosClient from "../apiClient";

class EmotionLikeApi {
    likePost = (postId) => {
        const url = `/like?postId=${postId}`;
        return axiosClient.post(url);
    }

    unlikePost = (postId) => {
        const url = `/like/unlike?postId=${postId}`;
        return axiosClient.delete(url);
    };
}

const emotionLikeApi = new EmotionLikeApi();
export default emotionLikeApi;
