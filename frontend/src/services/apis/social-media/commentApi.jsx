import axiosClient from "../apiClient";

class CommentApi {
    createComment =  (postId,formData) => {
        const url = `/comment?postId=${postId}`;
        const config = {
            headers: {
                'Authorization': axiosClient.defaults.headers.common['Authorization'],
                'Content-Type': 'multipart/form-data'
            }
        };
        return axiosClient.post(url, formData, config);
    };

    getAllComment = (postId) => {
        const url = `/comment?postId=${postId}`;
        console.log(url);
        return axiosClient.get(url);
    }

    deleteComment = (commentId) => {
        const url = `/comment?commentId=${commentId}`;
        return axiosClient.delete(url);
    }
}

const commentApi = new CommentApi();
export default commentApi;
