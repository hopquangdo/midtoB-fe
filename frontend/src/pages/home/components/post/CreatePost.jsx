import React, { useState } from 'react';
import Avatar from "react-avatar";
import { CiImageOn, CiVideoOn, CiLocationOn } from "react-icons/ci";
import { useSelector } from "react-redux";
import postApi from "../../../../services/apis/postApi";
import notify from '../../../../components/notification/Notification';
const CreatePost = ({updatePost}) => {
    const [content, setContent] = useState("");
    const currentUser = useSelector((state) => state.user.auth.currentUser);

    const submitHandler = async () => {
        try {
            if (content != "") {
                const response = await postApi.createPost({content: content});
                updatePost(response.data);
                setContent("");
                notify.success("Đăng bài thành công!")
            } else {
                notify.warn("Vui lòng nhập nội dung!")
            }
        } catch (error) {
            console.error("Error creating post:", error);
        }
    }

    return (
        <div className='w-[100%]'>
            <div>
                <div>
                    <div className='flex items-center p-3'>
                        <div>
                            <Avatar src={currentUser.avatar} size="40" round={true} />
                        </div>
                        <input value={content} onChange={(e) => setContent(e.target.value)} className='w-full outline-none border-none text-xl ml-2' type="text" placeholder='Bạn đang nghĩ gì?!' />
                    </div>
                    <div className='flex items-center justify-between p-3 border-b border-gray-300'>
                        <div>
                            <CiImageOn size="24px" />
                        </div>
                        <div>
                            <CiVideoOn size="24px" />
                        </div>
                        <div>
                            <CiLocationOn size="24px" />
                        </div>
                        <button onClick={submitHandler} className='bg-[#2d3c46] px-4 py-1 text-lg text-white text-right border-none rounded-full'>Post</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreatePost;
