import { useState,useEffect } from "react";
import CreatePost from "./CreatePost";
import PostCard from "./PostCard";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import notify from "../../../../components/notification/Notification";
import postApi from "../../../../services/apis/postApi";
const Feeds = () => {
    const navigate = useNavigate();
    const currentUser = useSelector((state) => state.user.auth);
    const [posts,setPosts] = useState([]);
    const fetchPost = async () => {
        try {
            const response = await postApi.getAllPosts();
            setPosts(response.data);
            console.log(response);
            console.log("goi data:")
        } catch(err){
            console.log(err);
        }
    }
    const updatePostList = (newPost) => {
        setPosts([newPost, ...posts]);
    }
    const fakePost = [{
        postId: 123,
        poster: { 
            userId: 1,
            fullName: "Do Quang Hop", 
            username: "dqh999",
            avatar: "https://pbs.twimg.com/profile_images/1703261403237502976/W0SFbJVS_400x400.jpg" 
        },
        description: "This is a fake tweet with an image.",
        attachments: [
        ], 
        createdAt: new Date(),
        totalLike: 10,
        comments: [{
            commentId: 123,
            userId: 9999,
            content: "This is comment",
            attachments: [
                {attachmentId: 999, attachmentUrl:'https://photo2.tinhte.vn/data/attachment-files/2024/04/8315017_8133074-tinhte-apple-iphone-15-finewoven-case-14.jpg'},
                {attachmentId: 888, attachmentUrl:'https://photo2.tinhte.vn/data/attachment-files/2024/04/8315017_8133074-tinhte-apple-iphone-15-finewoven-case-14.jpg'}
            ],
            createdAt: new Date(), 
            }],
        createdAt: new Date(),
    },{
        postId: 325,
        poster: { 
            userId: 1,
            fullName: "Do Quang Hop", 
            username: "dqh999",
            avatar: "https://pbs.twimg.com/profile_images/1703261403237502976/W0SFbJVS_400x400.jpg" 
        },
        description: "This is a fake post with an image.",
        attachments: [
            {attachmentId: 999, attachmentUrl:'https://photo2.tinhte.vn/data/attachment-files/2024/04/8315017_8133074-tinhte-apple-iphone-15-finewoven-case-14.jpg'},
            {attachmentId: 888, attachmentUrl:'https://photo2.tinhte.vn/data/attachment-files/2024/04/8315017_8133074-tinhte-apple-iphone-15-finewoven-case-14.jpg'}
        ], 
        createdAt: new Date(),
        totalLike: 11,
        comments: [{
            commentId: 123,
            userId: 9999,
            content: "This is comment",
            attachments: [
                {attachmentId: 65654, attachmentUrl:'https://photo2.tinhte.vn/data/attachment-files/2024/04/8315017_8133074-tinhte-apple-iphone-15-finewoven-case-14.jpg'},
                {attachmentId: 888, attachmentUrl:'https://photo2.tinhte.vn/data/attachment-files/2024/04/8315017_8133074-tinhte-apple-iphone-15-finewoven-case-14.jpg'}
            ], 
            },{
            commentId: 34234,
            userId: 9999,
            content: "This is comment",
            attachments: [
                {attachmentId: 5645, attachmentUrl:'https://photo2.tinhte.vn/data/attachment-files/2024/04/8315017_8133074-tinhte-apple-iphone-15-finewoven-case-14.jpg'},
                {attachmentId: 56456, attachmentUrl:'https://photo2.tinhte.vn/data/attachment-files/2024/04/8315017_8133074-tinhte-apple-iphone-15-finewoven-case-14.jpg'}
            ], 
            }],
        createdAt: new Date(),
    }];
    useEffect(() => {
        document.title = "Diễn đàn | StudyWithMe";
        fetchPost();
    }, []);
    const [isActive,setActive] = useState(true);
    const forYouHandler = () => {
        setActive(!isActive);
    }
    const followingHandler = () => {
        if (!currentUser.isLoggedIn){
            navigate("/login");
            notify.warn("Vui lòng đăng nhập!");
        }
        setActive(!isActive);
    }
    return (
        <div className="flex flex-col items-center">
            <div className="w-full max-w-xl">
                <div className='flex items-center justify-evenly border-b border-gray-200'>
                    <div onClick={forYouHandler} className={`${isActive ? "border-b-4 border-gray-700" : "border-b-4 border-transparent"} cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-3`}>
                        <h1 className='font-semibold text-gray-600 text-lg'>Mọi người</h1>
                    </div>
                    <div onClick={followingHandler} className={`${!isActive ? "border-b-4 border-gray-700" : "border-b-4 border-transparent"} cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-3`}>
                        <h1 className='font-semibold text-gray-600 text-lg'>Đang theo dõi</h1>
                    </div>
                </div>
                <CreatePost updatePost={updatePostList}/>
                {posts?.map((post) => (
                    <PostCard key={post.postId} post={post}/>
                ))}
            </div>
        </div>
    )
}
export default Feeds;