import { useState,useEffect } from "react";
import CreatePost from "./CreatePost";
import PostCard from "./PostCard";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import notify from "../../../../components/notification/Notification";
import postApi from "../../../../services/apis/social-media/postApi";
const Post = () => {
    const navigate = useNavigate();
    const currentUser = useSelector((state) => state.user.auth);
    const [posts,setPosts] = useState([]);
    const [loading,setLoading] = useState(false);
    const fetchPost = async () => {
        try {
            setLoading(true);
            const response = await postApi.getAllPosts();
            setPosts(response.data);
            setLoading(false);
        } catch(err){
            setLoading(false);
            console.log(err);
        }
    }
    const updatePostList = (newPost) => {
        setPosts([newPost, ...posts]);
    }
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
    const deletePost = (postId) => {
        const updatedPosts = posts.filter(post => post.postId !== postId);
        setPosts(updatedPosts);
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
                    <PostCard key={post.postId} post={post} deletePost={deletePost}/>
                ))}
            </div>
        </div>
    )
}
export default Post;