import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { WebContext } from '../../context/WebContext';
import { updateChatRoom } from '../../redux/chat/ChatRoomRequest';
import { CiSearch } from 'react-icons/ci';
const ChatRoom = ({chatRoom,onRoomSelect}) => {
  const dispatch = useDispatch();

  const {newMessage} = useContext(WebContext);
  
  const [roomList,setRoomList] = useState([]);
  const [roomTab,setRoomTab] = useState({});
  const [keyword,setKeyword] = useState("");

  useEffect(()=>{
    if (!keyword){
      setRoomList(chatRoom);
    }
  },[keyword])
  useEffect(()=>{
    updateChatRoom(dispatch,newMessage);
  },[newMessage]);
  
  const handleClickRoomTab = (room) => {
    setRoomTab(room);
    onRoomSelect(room);
  }

  const handleSearchRoom = (e) => {
    setKeyword(e.target.value);
    const filteredRooms = chatRoom.filter(room => room.roomName.includes(keyword));
    setRoomList(filteredRooms);
  }
  return (
    <div className='flex flex-col items-center border-r border-gray-400 ' style={{ height: "calc(100vh - 117px)" }}>
      <label className="text">Nhắn tin</label>
      <div className="bg-gray-200  m-2 rounded-lg  py-2 px-4 w-4/5 flex flex-row items-center">
        <input placeholder="Tìm kiếm..." className="bg-transparent focus:outline-none w-full"
          value={keyword}
          onChange={handleSearchRoom}/>
        <CiSearch size={"20px"}/>
      </div>
      <div className="w-[400px] overflow-y-auto" style={{ height: "calc(100vh - 117px)" }}>
          {roomList?.map((room) => (
            <div key={room?.roomId} className={`${room?.roomId == roomTab?.roomId ? "bg-gray-100": ""} flex items-center justify-between py-2 px-4 cursor-pointer`}
              onClick={() => {handleClickRoomTab(room)}}>
              <div className="flex items-center">
                <img className="m-1 w-10 h-10 rounded-full mr-2" src="https://th.bing.com/th/id/OIP.eKCbRnHX8OXc-0e7ZCwgJQHaKm?rs=1&pid=ImgDetMain" alt={room?.roomName}/>
                <div>
                  <div className="font-semibold">{room?.roomName}</div>
                  <div className="text-sm text-gray-600">{room?.lastMessage?.content}</div>
                </div>
              </div>
                <div className="text-sm text-gray-500">10:30 AM</div>
            </div>
          ))}
      </div>
    </div>
  );
}
export default ChatRoom;