import React, { createContext, useState, useEffect } from 'react';
import { BACK_END_URL } from "../constants/baseConstant";
import { over } from 'stompjs';
import SockJS from 'sockjs-client';
import { useDispatch, useSelector } from 'react-redux';
import { connectToChatRooms } from "../services/ws/chatWS";
import { getAllChatRoom } from "../redux/chat/ChatRoomRequest";
import {getHeader} from "../utils/auth";

export const WebContext = createContext(null);
export const WebProvider = ({ children }) => {
  const dispatch = useDispatch();
  
  const auth = useSelector((state) => state.user.auth);
  const chatRoom = useSelector((state) => state.chatRoom.rooms);

  const [stompClient, setStompClient] = useState(null);
  const [newMessage,setNewMessage] = useState({});
  const [isShowSidebar,setShowSideBar] = useState(true);

  const onConnectChatRoom = (client) => {
    getAllChatRoom(dispatch);
    connectToChatRooms(client,chatRoom,setNewMessage);
  }
  
  useEffect(() => {
    if (auth.isLoggedIn){
      const sock = new SockJS(`${BACK_END_URL}/ws`);
      const client = over(sock);
      client.connect(getHeader(),
        () => onConnectChatRoom(client),
        (err) => {console.log(err)});
      setStompClient(client);
      return () => {
        if (stompClient) {
          stompClient.disconnect();
        }
      };
    }
  }, [auth]);

  return (
    <WebContext.Provider value={{stompClient,newMessage,isShowSidebar,setShowSideBar}}>
      {children}
    </WebContext.Provider>
  );
};
