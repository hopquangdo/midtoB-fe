import Avatar from "react-avatar";
import { FaRegComment } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FaHeart } from 'react-icons/fa';
const CommentReplyCard = ({replyComment}) => {
    const currentUser = {
        userId: 10,
    }
    const likeOrDislikeHandler = async (id) => {
    };

    const deleteTweetHandler = async (id) => {
    };
    return (
        <div className='flex'>
            <Avatar src={replyComment?.user?.avatar} size="30" round={true} />
            <div className=' flex-1 ml-2'>
                <div className='flex items-center'>
                    <h1 className='font-bold'>{replyComment?.user?.fullName}</h1>
                    <p className='text-gray-500 text-sm ml-1'>{`@${replyComment?.user?.userName} `}</p>
                </div>
                <div>
                    <p>{replyComment?.content}</p>
                    <div className='flex flex-row overflow-x-auto'>
                        {replyComment?.attachments?.map((attachment)=>(
                            <img key={attachment.attachmentId} src={attachment.attachmentUrl} className="mt-2"/>
                        ) )}
                    </div>
                </div>
                <div className='flex my-3'>
                    <div className='flex items-center'>
                        <div onClick={() => likeOrDislikeHandler(post?._id)} className='p-2 hover:bg-pink-200 rounded-full cursor-pointer'>
                            <FaHeart size="15px"/>
                        </div>
                        <p>{11}</p>
                    </div>
                    <div className='flex items-center'>
                        <div className='p-2 hover:bg-green-200 rounded-full cursor-pointer'>
                            <FaRegComment size="15px" />
                        </div>
                        <p>{10}</p>
                    </div>
                    {currentUser.userId === replyComment?.user.userId && (
                        <div onClick={() => deleteTweetHandler(replyComment?.commentId)} className='flex items-center'>
                            <div className='p-2 hover:bg-red-300 rounded-full cursor-pointer'>
                                <MdOutlineDeleteOutline size="15px" />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
export default CommentReplyCard;