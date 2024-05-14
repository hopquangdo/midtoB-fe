import React, { useEffect, useState } from "react";
import Avatar from "react-avatar";
import { MdSend } from "react-icons/md";
import { CiImageOn,CiVideoOn } from "react-icons/ci";
import CommentCard from "./CommentCard";
import { useSelector } from "react-redux";
import commentApi from "../../../../services/apis/social-media/commentApi";
const Comment = ({postId}) => {
    const currentUser = useSelector((state) => state.user.auth.currentUser);
    const [newComment,setNewComment] = useState({
        content: "",
        attachmments: [],
    });
    const [commentList,setCommentList] = useState([]);

    useEffect(() => {
        if (commentList){
            fetchComment();
        }
    }, [postId]);
    
    const fetchComment = async () => {
        try {
            const response = await commentApi.getAllComment(postId);
            console.log("comment",response.data.comments);
            setCommentList(response.data.comments);
        } catch (err) {
            console.log(err);
        }
    }
    const handleImageChange = () => {
        const files = Array.from(e.target.files);
        setNewComment([...newComment.attachmments, ...files]);
    }
    const handleComment = async () => {
        try {
            const formData = new FormData();
                formData.append('content', newComment?.content);
                newComment?.attachmments?.forEach((file, index) => {
                    formData.append(`attachments[${index}]`, file);
            });
            const response = await commentApi.createComment(postId,formData);
            setCommentList([response.data, ...commentList]);
            setNewComment({
                content: "",
                attachmments: [],
            });
        } catch(err){
            console.log(err);
        }
    }
    const handleDeleteComment = async (commentId) => {
        try {
            await commentApi.deleteComment(commentId);
            setCommentList(commentList.filter((comment) => comment?.commentId !== commentId));
        } catch (err){
            console.log(err);
        }
    }
    return (
        <div>
            {commentList?.map((comment) => (
                <CommentCard key={comment.commendId} comment={comment} deleteComment={handleDeleteComment}/>
            ))}
            <div className='flex items-center'>
                <Avatar src={currentUser.avatar} size="30" round={true} />
                <div className="flex-1 ml-2">
                    <input className="w-full outline-none border-none text-lg"
                    value={newComment.content}
                    onChange={(e) => setNewComment({ ...newComment, content: e.target.value })}
                    type="text" placeholder="Bạn đang nghĩ gì?!" />
                </div>                
                <div className="overflow-x-auto flex flex-no-wrap">
                    {newComment?.attachmments.map((file, index) => (
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