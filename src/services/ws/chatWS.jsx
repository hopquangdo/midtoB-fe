import {getHeader} from "../../utils/auth";
const connectToChatRooms =  (client,chatRoom,setNewMessage) => {
  const onMessageReceived = (payload)=>{
    try {
        const destination = payload.headers.destination;
        const roomId = destination.split('/').pop();
        var newMessage = JSON.parse(payload.body);
        setNewMessage({roomId:roomId,message:newMessage});
    } catch (err){
        console.log(err);
    }
  }
  chatRoom?.map((room) => {
    try {
      client.subscribe(`/chatRoom/${room?.roomId}`, onMessageReceived, getHeader());
    } catch (err){
      console.log(err);
    }
  })
}
const sendMessage = (stompClient,roomId,newMessageData) => {
  try {
    stompClient.send(`/app/send/message/${roomId}`, 
      getHeader(),
      JSON.stringify(newMessageData));
    console.log("send successfully!")
  } catch (err){
    console.log(err);
  }
}
export {connectToChatRooms,sendMessage};