import React,{useState,useRef, useEffect,useContext} from "react";
import { CiImageOn, CiVideoOn, CiPhone,CiCamera, CiCoinInsert, CiCoins1 } from "react-icons/ci";
import { CiBitcoin } from "react-icons/ci";
import { AiOutlineSend } from 'react-icons/ai';
import { sendMessage } from "../../services/ws/chatWS";
import chatRoomApi from "../../services/apis/social-media/chatRoomApi";
import { WebContext } from "../../context/WebContext";
const Message = ({currentUser,stompClient,roomTab}) => {
    const { newMessage } = useContext(WebContext);

    const textAreaRef = useRef(null);
    const conversationRef = useRef(null);

    const [converstaion,setConversation] = useState([]);
    const [messageInput, setMessageInput] = useState('');
    const [textareaHeight, setTextareaHeight] = useState(40);

    useEffect(() => {
        setConversation([]);
        fetchMessage();
    },[roomTab?.roomId])
    useEffect(() => {
        if (conversationRef.current) {
            conversationRef.current.scrollTop = conversationRef.current.scrollHeight;
        }
    }, [converstaion]);
    useEffect(()=>{
        console.log("newMessage",newMessage.newMessage);
        if (newMessage?.roomId == roomTab?.roomId){
            console.log('new Message',newMessage);
            setConversation(prevConversation => [...prevConversation, newMessage.message]);
        }
    },[newMessage])

    const fetchMessage = async() => {
        try {
            const response = await chatRoomApi.getAllMessage(roomTab?.roomId);
            setConversation(response.data.messages);
            console.log(response.data);
        } catch(err){
            console.log(err);
        }
    }
    const handleChangeInput = (e) => {
        setMessageInput(e.target.value);
        textAreaRef.current.style.height = "40px";
        setTextareaHeight(Math.min(200,textAreaRef.current.scrollHeight));
        textAreaRef.current.style.height = textareaHeight + "px";
    }
    const handleSendMessage = () => {
        const newMessageData = {
            senderId: currentUser?.userId,
            content: messageInput,
            attachments: [],
        }
        setMessageInput("");
        sendMessage(stompClient,roomId,newMessageData);
    }
    
    return (
        <div className='w-full'>
            <div class="flex items-center justify-between bg-gray-200 p-4">
                <div class="flex items-center">
                    <img className="h-10 w-10 rounded-full m-1" src="https://th.bing.com/th/id/OIP.eKCbRnHX8OXc-0e7ZCwgJQHaKm?rs=1&pid=ImgDetMain" alt="Avatar" class="w-10 h-10 rounded-full mr-4"/>
                    <div>
                        <div class="font-semibold">{roomTab?.roomName}</div>
                        <div class="text-sm text-gray-600">Đang hoạt động</div>
                    </div>
                </div>
                <div class="flex items-center">
                    <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-5 rounded-full mr-2">
                        <CiPhone size={"25px"}/>
                    </button>
                    <button class="bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-5 rounded-full">
                        <CiCamera size={"25px"}/>
                    </button>
                </div>
            </div>
            <div className="w-full" style={{height:"100%"}}>
                <div ref={conversationRef} className="overflow-y-auto w-full" style={{ height: `calc(100vh - 217px - ${textareaHeight}px)` }}>
                    {converstaion?.map((message, index) => (
                    <div key={index} className={`mx-auto my-2 flex items-center ${currentUser.userId == message?.senderId ? 'justify-end' : 'justify-start'}`}>
                        {currentUser.userId !== message?.senderId && <img src={message?.sender?.avatar} className="w-8 h-8 rounded-full mr-2" />}
                        <div className={`p-2 rounded-lg ${currentUser.userId == message?.senderId ? "bg-pink-500 text-white ml-auto" : "bg-gray-200"}`} style={{width: 'fit-content'}}>
                        <p className="text-sm">{message?.content}</p>
                        </div>
                    </div>
                    ))}
                </div>
                <div className="flex flex-row items-center w-full p-2 bg-gray-100 rounded-sm">
                    <div className="pr-2 cursor-pointer">
                        <CiImageOn size={"20px"}/>
                    </div>
                    <div className="pr-2 cursor-pointer">
                        <CiVideoOn size={"20px"}/>
                    </div>
                    <div className="pr-2 cursor-pointer">
                        <CiCoinInsert size={"25px"}/>
                    </div>
                    <textarea className="w-full p-2 items-center rounded-lg focus:outline-none" 
                        ref={textAreaRef}
                        placeholder="Aa"
                        value={messageInput} onInput={handleChangeInput}
                        style={{ resize: "none",overflow:"hidden",height:textareaHeight}}/> 
                    <div className="pl-2">
                        <AiOutlineSend size={"20px"} color="gray" onClick={handleSendMessage}/>
                    </div>  
                </div>
            </div>      
        </div>
    )
}
export default Message;