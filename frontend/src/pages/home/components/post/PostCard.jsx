import React, { useState } from 'react';
import Avatar from "react-avatar";
import { FaRegComment } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from 'react-icons/fa';
import { CiBookmark } from "react-icons/ci";
import { useSelector, useDispatch } from "react-redux";
import Comment from "../comment/Comment";
import { useNavigate } from 'react-router-dom';
import notify from '../../../../components/notification/Notification';
const PostCard = ({post}) => {
    const navigate = useNavigate();
    const authUser = useSelector((state) => state.user.auth);
    const [onLike,setOnLike] = useState(false);
    const [onComment,setOnComment] = useState(false);
    const handeLike =  () => {
        if (!authUser.isLoggedIn){
            navigate("/login");
            notify.warn("Vui lòng đăng nhập!");
        }
        if (onLike){
            console.log("Dislike");
        } else {
            console.log("like");
        }
        setOnLike(!onLike);
    };
    const deleteTweetHandler = async (id) => {

    };

    return (
        <div className='border-b border-gray-200'>
            <div className='flex p-3'>
                <Avatar src={post?.poster?.avatar} size="40" round={true} />
                <div className=' ml-2 w-full'>
                    <div className='flex items-center'>
                        <h1 className='font-bold'>{post?.poster?.fullName}</h1>
                        <p className='text-gray-500 text-sm ml-1'>{`@${post?.poster?.userName} . Sat Apr 27 2024`}</p>
                    </div>
                    <div>
                        <p>{post?.content}</p>
                        <div className='flex flex-row overflow-x-auto'>
                            {post?.attachments?.map((attachment)=>(
                                <img key={attachment.attachmentId} src={attachment.attachmentUrl} className="mt-2"/>
                            ) )}
                        </div>
                    </div>
                    <div className='flex justify-between my-2'>
                        <div className='flex items-center'>
                            <div onClick={handeLike} className='p-2 hover:bg-pink-200 rounded-full cursor-pointer'>
                                {onLike ? (<FaHeart size="24px" color='red'/>):(<CiHeart size="24px"/>)}
                            </div>
                            <p>{post?.totalLike}</p>
                        </div>
                        <div className='flex items-center' onClick={() => {setOnComment(!onComment)}}>
                            <div className='p-2 hover:bg-green-200 rounded-full cursor-pointer'>
                                <FaRegComment size="20px" />
                            </div>
                            <p>{post?.comments?.length}</p>
                        </div>
                        <div className='flex items-center'>
                            <div className='p-2 hover:bg-yellow-200 rounded-full cursor-pointer'>
                                <CiBookmark size="24px" />
                            </div>
                            <p>0</p>
                        </div>
                        {authUser.currentUser.userId === post?.poster.userId && (
                            <div onClick={() => deleteTweetHandler(post?.postId)} className='flex items-center'>
                                <div className='p-2 hover:bg-red-300 rounded-full cursor-pointer'>
                                    <MdOutlineDeleteOutline size="24px" />
                                </div>
                            </div>
                        )}
                    </div>
                    {onComment && (<Comment postId={post?.postId}/>)}
                </div>
            </div>
        </div>
    );
};

export default PostCard;
