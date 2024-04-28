import React, { useState } from 'react';
import Avatar from "react-avatar";
import { CiImageOn, CiVideoOn, CiLocationOn,CiFaceSmile } from "react-icons/ci";
import { useSelector } from "react-redux";
import notify from '../../../../components/notification/Notification';
import Loading from '../../../../components/loading/Loading';
import postApi from '../../../../services/apis/social-media/postApi';
const CreatePost = ({ updatePost }) => {
    const currentUser = useSelector((state) => state.user.auth.currentUser);
    const [content, setContent] = useState("");
    const [attachment, setAttachment] = useState([]);
    const [loading,setLoading] = useState(false);

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setAttachment([...attachment, ...files]);
    };

    const submitHandler = async () => {
        try {
            if (content !== "") {
                setLoading(true);
                const formData = new FormData();
                formData.append('content', content);
                attachment.forEach((file, index) => {
                    formData.append(`attachments[${index}]`, file);
                });
                const response = await postApi.createPost(formData);
                updatePost(response.data);
                setContent("");
                setAttachment([]); 
                setLoading(false);
                notify.success("Đăng bài thành công!");
            } else {
                setLoading(false);
                notify.warn("Vui lòng nhập nội dung!");
            }
        } catch (error) {
            console.error("Error creating post:", error);
        }
    };

    return (
        <div className={`w-[100%] flex flex-col relative ${loading ? 'opacity-50 pointer-events-none' : ''}`}>
            {loading && <Loading style={{}} />}

            <div className='flex flex-col items-center p-3'>
                <div className='flex flex-row items-center w-full'>
                    <div>
                        <Avatar src={currentUser.avatar} size="40" round={true} />
                    </div>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className='w-full outline-none border-none text-xl ml-2 relative top-3'
                        placeholder='Bạn đang nghĩ gì?!'
                    />
                </div>
            </div>
            <div className="overflow-x-auto flex flex-no-wrap">
                {attachment.map((file, index) => (
                    <div key={index} className="p-3">
                        <img src={URL.createObjectURL(file)} alt={`Image ${index}`} style={{ maxWidth: '100%', maxHeight: '200px' }} />
                    </div>
                ))}
            </div>
            <div className='flex items-center justify-between p-3 border-b border-gray-300'>
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
                <div>
                    <CiFaceSmile size="24px"/>
                </div>
                <div>
                    <CiLocationOn size="24px" />
                </div>
                <button onClick={submitHandler} className={`bg-[#2d3c46] px-4 py-1 text-lg text-white text-right border-none rounded-full ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}>Post</button>
            </div>
        </div>
    );
}

export default CreatePost;
