import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from "react-avatar";
import { FaRegComment } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from 'react-icons/fa';
import { CiBookmark } from "react-icons/ci";
import { useSelector, useDispatch } from "react-redux";
import Comment from "../comment/Comment";
import notify from '../../../../components/notification/Notification';
import emotionLikeApi from '../../../../services/apis/social-media/emotionLikeApi';
import postApi from '../../../../services/apis/social-media/postApi';
const PostCard = ({post,deletePost}) => {
    const navigate = useNavigate();
    const authUser = useSelector((state) => state.user.auth);
    const [onLike,setOnLike] = useState(post?.currentUserLikePost);
    const [onComment,setOnComment] = useState(false);
    const [isCommentFetched, setCommentFetched] = useState(false);

    const [totalLike,setTotalLike] = useState(post?.totalLikes || 0);
    const [totalComment,setTotalComment] = useState(post?.totalComments || 0);
    const [totalSavePost,setTotalSavePost] = useState(0);

    const fetchLike = async () => {
        try {
            await emotionLikeApi.likePost(post?.postId);
        } catch (err){
            console.log(err);
        }
    }
    const fetchUnLike = async () => {
        try {
            await emotionLikeApi.unlikePost(post?.postId);
        } catch (err){
            console.log(err);
        }
    }
    const handeLike =  () => {
        if (!authUser.isLoggedIn){
            navigate("/login");
            notify.warn("Vui lòng đăng nhập!");
        } else {
            if (onLike){
                fetchUnLike();
                setTotalLike(totalLike -1);
            } else {
                fetchLike();
                setTotalLike(totalLike + 1);
            }
            setOnLike(!onLike);
        }
    };
    const handleDeletePost = async ()  => {
        try {
            await postApi.deletePost(post?.postId);
            deletePost(post?.postId);
            notify.success("Xóa bài viết thành công!");
        } catch(err){
            console.log(err);
        }
    };
    const handleSavePost = () => {
        setTotalSavePost(totalSavePost + 1);
    }
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
                            {post?.attachments?.map((attachment,index)=>(
                                <img key={index} src={attachment} className="mt-2"/>
                            ) )}
                        </div>
                    </div>
                    <div className='flex justify-between my-2'>
                        <div className='flex items-center'>
                            <div onClick={handeLike} className='p-2 hover:bg-pink-200 rounded-full cursor-pointer'>
                                {onLike ? (<FaHeart size="24px" color='red'/>):(<CiHeart size="24px"/>)}
                            </div>
                            <p>{totalLike}</p>
                        </div>
                        <div className='flex items-center' onClick={() => {setOnComment(!onComment)}}>
                            <div className='p-2 hover:bg-green-200 rounded-full cursor-pointer'>
                                <FaRegComment size="20px" />
                            </div>
                            <p>{totalComment}</p>
                        </div>
                        <div className='flex items-center'>
                            <div className='p-2 hover:bg-yellow-200 rounded-full cursor-pointer'
                                onClick={handleSavePost}>
                                <CiBookmark size="24px" />
                            </div>
                            <p>{totalSavePost}</p>
                        </div>
                        {authUser.currentUser.userId === post?.poster.userId && (
                            <div onClick={handleDeletePost} className='flex items-center'>
                                <div className='p-2 hover:bg-red-300 rounded-full cursor-pointer'>
                                    <MdOutlineDeleteOutline size="24px" />
                                </div>
                            </div>
                        )}
                    </div>
                    {onComment && <Comment postId={post?.postId}/>}
                </div>
            </div>
        </div>
    );
};

export default PostCard;
