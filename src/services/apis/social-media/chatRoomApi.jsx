import axiosClient from "../apiClient";

class ChatApi {
    getAllChatRoom = () => {
        const url = `/chat/chatRoom`;
        return axiosClient.get(url);
    }
    getAllMessage = (roomId) => {
        const url = `/chat?roomId=${roomId}`;
        return axiosClient.get(url);
    }
}

const chatRoomApi = new ChatApi();
export default chatRoomApi;
