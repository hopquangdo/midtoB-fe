import React,{useState} from "react";
import Avatar from "react-avatar";
import { FaRegComment } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FaHeart } from 'react-icons/fa';
import CommentReply from "./reply/CommentReply";
import { useSelector } from "react-redux";
const CommentCard = ({comment,deleteComment}) => {
    const [onReplyComment,setReplyComment] = useState(false);
    const currentUser = useSelector((state) => state.user.auth.currentUser);
    const likeOrDislikeHandler = async (id) => {
    };
    console.log("comment card",comment);
    return (
        <div className='flex p-1'>
            <Avatar src={comment?.user?.avatar} size="30" round={true} />
            <div className=' ml-2 w-full'>
                <div className='flex items-center'>
                    <h1 className='font-bold'>{comment?.user?.fullName}</h1>
                    <p className='text-gray-500 text-sm ml-1'>{`@${comment?.user?.userName} `}</p>
                </div>
                <div>
                    <p>{comment?.content}</p>
                    <div className='flex flex-row overflow-x-auto'>
                        {comment?.attachments?.map((attachment)=>(
                            <img src={attachment} className="mt-2"/>
                        ) )}
                    </div>
                </div>
                <div className='flex'>
                    <div className='flex items-center'>
                        <div onClick={() => likeOrDislikeHandler(post?._id)} className='p-2 hover:bg-pink-200 rounded-full cursor-pointer'>
                            <FaHeart size="15px"/>
                        </div>
                        <p>{comment?.likes?.length}</p>
                    </div>
                    <div className='flex items-center' onClick={()=>{setReplyComment(!onReplyComment)}}>
                        <div className='p-2 hover:bg-green-200 rounded-full cursor-pointer'>
                            <FaRegComment size="15px" />
                        </div>
                        <p>{comment?.comments?.length}</p>
                    </div>
                    {currentUser?.userId === comment?.user.userId && (
                        <div onClick={() => {deleteComment(comment.commentId)}} className='flex items-center'>
                            <div className='p-2 hover:bg-red-300 rounded-full cursor-pointer'>
                                <MdOutlineDeleteOutline size="15px" />
                            </div>
                        </div>
                    )}
                </div>
                {onReplyComment && (<CommentReply commentId={comment?.commentId}/>)}
            </div>
        </div>
    )
}
export default CommentCard;