
import React, { useEffect, useState,useContext } from 'react';
import Message from "./Message";
import ChatRoom from './ChatRoom';
import { WebContext } from "../../context/WebContext"
import { useSelector } from 'react-redux';
const ChatPage = () => {
  const {stompClient} = useContext(WebContext);

  const user = useSelector((state) => state.user.auth.currentUser);
  const chatRoom = useSelector((state) => state.chatRoom.rooms);

  const [converstaion,setConversation] = useState(chatRoom ? chatRoom[0] : {});
  
  return (
    <div className='flex flex-row w-full'>
      <ChatRoom chatRoom={chatRoom} onRoomSelect={setConversation}/>
      <Message currentUser={user} stompClient={stompClient} roomTab={converstaion}/>
    </div>
  );
};
export default ChatPage;
