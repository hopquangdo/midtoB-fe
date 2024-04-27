import React from "react";
import Avatar from "react-avatar";
import CommentReplyCard from "./CommentReplyCard";
import { MdSend } from "react-icons/md";
import { CiImageOn,CiVideoOn } from "react-icons/ci";
const CommentReply = ({commentId}) => {
    
    const replyComment = {
        replyId: 12,
        commentId: 10,
        postId: 1,
        user: {
            userId: 10,
            userName: "dhop999",
            fullName: "Do Quang Hop",
            avatar: "https://pbs.twimg.com/profile_images/1703261403237502976/W0SFbJVS_400x400.jpg",
        },
        content: "This is comment",
        attachments: [
            {attachmentId: 999, attachmentUrl:'https://photo2.tinhte.vn/data/attachment-files/2024/04/8315017_8133074-tinhte-apple-iphone-15-finewoven-case-14.jpg'},
            {attachmentId: 888, attachmentUrl:'https://photo2.tinhte.vn/data/attachment-files/2024/04/8315017_8133074-tinhte-apple-iphone-15-finewoven-case-14.jpg'}
        ], 
        createdAt: new Date(),
    };
    return (
        <div className="border-l border-gray-300">
            <div className="pl-5">
                <CommentReplyCard replyComment={replyComment}/>
                <div className='flex items-center'>
                    <Avatar src="https://pbs.twimg.com/profile_images/1703261403237502976/W0SFbJVS_400x400.jpg" size="30" round={true} />
                    <div className="flex-1 ml-2">
                        <input className="w-full outline-none border-none text-lg" type="text" placeholder="Bạn đang nghĩ gì?!" />
                    </div>                 
                    <div className='flex items-center justify-between p-4'>
                        <div>
                            <CiImageOn size="24px" />
                        </div>
                        <div>
                            <CiVideoOn size="24px" />
                        </div>
                    </div>
                    <MdSend size="20px" color="blue"/>
                </div>
            </div>
        </div>
    )
}
export default CommentReply;