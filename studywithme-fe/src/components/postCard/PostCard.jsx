import React, { useState } from 'react';
import Comment from "../comment/Comment";
function PostCard({ post }) {
  const [actionLike, setActionLike] = useState(false);
  const [showComment,setShowComment] = useState(false);
  const handleActonLike = () => {
    setActionLike(!actionLike);
  }

  return (
    <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-3xl m-1 p-10'>       
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center space-x-2">
            <img src={post.avatar} alt="User Avatar" className="w-8 h-8 rounded-full" />
            <div>
              <p className="text-gray-800 font-semibold">{post.author}</p>
              <p className="text-gray-500 text-sm">Đăng 2 giờ trước</p>
            </div>
          </div>
          <div className="text-gray-500 cursor-pointer">
            <button className="hover:bg-gray-50 rounded-full p-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="7" r="1" />
                <circle cx="12" cy="12" r="1" />
                <circle cx="12" cy="17" r="1" />
              </svg>
            </button>
          </div>
        </div>
        {/* Message */}
        <div className="mb-4">
          <p className="text-gray-800">{post.content}</p>
        </div>
        {/* Image */}
        <div className="flex overflow-x-auto mb-4">
          {post.imageUrl && post.imageUrl.map((url, index) => (
            <div key={index} className="flex-none w-48 mr-4">
              <img src={url} alt="Post Image" className="w-full h-48 object-cover rounded-md" />
            </div>
          ))}
        </div>
        {/* Like and Comment Section */}
        <div className="flex items-center justify-between text-gray-500">
          <div className="flex items-center space-x-2">
            <button className="flex justify-center items-center gap-2 px-2 hover:bg-gray-50 rounded-full p-1"
              onClick={handleActonLike}>
              {actionLike ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-red-500">
                  <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>)}
              <span>42 Likes</span>
            </button>
          </div>
          <button className="flex justify-center items-center gap-2 px-2 hover:bg-gray-50 rounded-full p-1" onClick={()=>{setShowComment(!showComment)}}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
            </svg>

            <span>Comment</span>
          </button>
          <button className="flex justify-center items-center gap-2 px-2 hover:bg-gray-50 rounded-full p-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
            </svg>
            <span>Share</span>
          </button>
          {/* Truyền postId xuống component Comments */}
        </div>
        {showComment && 
          <Comment postId={post.id}/>
        } 
      </div>
  );
}

export default PostCard;
