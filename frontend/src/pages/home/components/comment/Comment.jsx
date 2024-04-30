import React, { useEffect, useState } from "react";
import Avatar from "react-avatar";
import { MdSend } from "react-icons/md";
import { CiImageOn,CiVideoOn } from "react-icons/ci";
import CommentCard from "./CommentCard";
import { useSelector } from "react-redux";
import commentApi from "../../../../services/apis/social-media/commentApi";
const Comment = ({postId}) => {
    const currentUser = useSelector((state) => state.user.auth.currentUser);
    const [comment,setComment] = useState({
        content: "",
        attachmments: [],
    });
    const [commentList,setCommentList] = useState([]);
    const handleImageChange = () => {
        const files = Array.from(e.target.files);
        setComment([...comment.attachmments, ...files]);
    }
    useEffect(()=>{
        fetchComment();
    },[postId]);
    const fetchComment = async () => {
        try {
            console.log("postId: ",postId);
            const response = await commentApi.getAllComment(postId);
            setCommentList(response.data.comments);
            console.log(response);
        } catch (err) {
            console.log(err);
        }
    }
    const handleComment = async () => {
        try {
            const formData = new FormData();
                formData.append('content', comment?.content);
                comment?.attachmments?.forEach((file, index) => {
                    formData.append(`attachments[${index}]`, file);
            });
            const response = await commentApi.createComment(postId,formData);
            setCommentList([response.data, ...commentList]);
            setComment({
                content: "",
                attachmments: [],
            });
        } catch(err){
            console.log(err);
        }
    }
    return (
        <div>
            {commentList?.map((comment) => (
                <CommentCard key={comment?.commentId} comment={comment}/>
            ))}
            <div className='flex items-center'>
                <Avatar src={currentUser.avatar} size="30" round={true} />
                <div className="flex-1 ml-2">
                    <input className="w-full outline-none border-none text-lg"
                    value={comment.content}
                    onChange={(e) => setComment({ ...comment, content: e.target.value })}
                    type="text" placeholder="Bạn đang nghĩ gì?!" />
                </div>                
                <div className="overflow-x-auto flex flex-no-wrap">
                    {comment?.attachmments.map((file, index) => (
                        <div key={index} className="p-3">
                            <img src={URL.createObjectURL(file)} alt={`Image ${index}`} style={{ maxWidth: '100%', maxHeight: '200px' }} />
                        </div>
                    ))}
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
                <MdSend size="20px" color="blue" onClick={handleComment}/>
            </div>
        </div>
    )
}
export default Comment;