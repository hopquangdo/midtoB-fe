import React, { useEffect, useState } from "react";
import Avatar from "react-avatar";
import CommentReplyCard from "./CommentReplyCard";
import { MdSend } from "react-icons/md";
import { CiImageOn,CiVideoOn } from "react-icons/ci";
import replyCommentApi from "../../../../../services/apis/social-media/replyCommentApi";
const CommentReply = ({commentId}) => {
    const [replyComment,setReplyComment] = useState({
        content: "",
        attachmments: [],
    })
    const [replyCommentList,setReplyCommentList] = useState([]);
    useEffect(()=>{
        fetchReplyComment(commentId);
    },[commentId]);
    const handleImageChange = () => {
        const files = Array.from(e.target.files);
        setReplyComment([...replyComment.attachmments, ...files]);
    }
    const fetchReplyComment = async () => {
        try {
            const response = await replyCommentApi.getAllReplyComment(commentId);
            setReplyCommentList(response.data.replyComments);
            console.log(response.data);
        } catch (err) {
            console.log(err);
        }
    }
    const handleReplyComment = async () => {
        try {
            const formData = new FormData();
                formData.append('content', replyComment?.content);
                replyComment?.attachmments?.forEach((file, index) => {
                    formData.append(`attachments[${index}]`, file);
            });
            const response = await replyCommentApi.createReplyComment(commentId,formData);
            console.log(response,"day la data reply!");
            setReplyCommentList([response.data, ...replyCommentList]);
            setReplyComment({
                content: "",
                attachmments: [],
            });
        } catch(err){
            console.log(err);
        }
    }
    return (
        <div className="border-l border-gray-300">
            <div className="pl-5">
                {replyCommentList.map(reply => (
                    <CommentReplyCard key={reply.replyCommentId} replyComment={reply}/>
                ))}
                <div className='flex items-center'>
                    <Avatar src="https://pbs.twimg.com/profile_images/1703261403237502976/W0SFbJVS_400x400.jpg" size="30" round={true} />
                    <div className="flex-1 ml-2">
                        <input className="w-full outline-none border-none text-lg" type="text" 
                        value={replyComment.content}
                        onChange={(e) => setReplyComment({ ...replyComment, content: e.target.value })}
                        placeholder="Bạn đang nghĩ gì?!" />
                    </div>                 
                    <div className='flex items-center justify-between p-4'>
                        <div>
                        <label htmlFor="file-input" style={{ cursor: "pointer" }}>
                            <CiImageOn size="24px" />
                        </label>
                        <input
                            id="file-input"
                            type='file'
                            style={{ display: "none" }}
                            className=''
                            onChange={handleImageChange}
                            multiple />
                        </div>
                        <div>
                            <CiVideoOn size="24px" />
                        </div>
                    </div>
                    <MdSend size="20px" color="blue" onClick={handleReplyComment}/>
                </div>
            </div>
        </div>
    )
}
export default CommentReply;