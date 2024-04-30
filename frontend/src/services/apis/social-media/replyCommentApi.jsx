import axiosClient from "../apiClient";

class ReplyCommentApi {
    createReplyComment =  (commentId,formData) => {
        const url = `/replyComment?commentId=${commentId}`;
        const config = {
            headers: {
                'Authorization': axiosClient.defaults.headers.common['Authorization'],
                'Content-Type': 'multipart/form-data'
            }
        };
        return axiosClient.post(url, formData, config);
    };

    getAllReplyComment = (commentId) => {
        const url = `/replyComment?commentId=${commentId}`;
        return axiosClient.get(url);
    }

    deleteComment = (replyCommentId) => {
        const url = `/replyComment?replyCommentId=${replyCommentId}`;
        return axiosClient.delete(url);
    }
}

const replyCommentApi = new ReplyCommentApi();
export default replyCommentApi;
