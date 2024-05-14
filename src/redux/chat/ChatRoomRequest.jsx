import chatRoomApi from "../../services/apis/social-media/chatRoomApi";
import { addChatRoom, updateRoom} from "./chatRoomSlice";

export const getAllChatRoom =  async (dispatch) => {
    try {
        const response = await chatRoomApi.getAllChatRoom();
        response.data.map((room) => {
            dispatch(addChatRoom(room))
        })
        return response.data;
    } catch (err) {
        console.log(err);
        return err;
    }
}
export const updateChatRoom = (dispatch,newMessage) => {
    try {
        console.log("CHAT ROOM REQUEST");
        dispatch(updateRoom({roomId:newMessage.roomId,lastMessage:newMessage.message}))
    } catch(err){
        console.log(err);
    }
}