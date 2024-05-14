import { Link } from "react-router-dom";
const QuestionCard = ({question}) => {
    return (
        <Link key={question?.questionId} className="flex md:flex-col lg:flex-row lg:items-center border-b border-gray-300 p-5 "
             to={`/study/questions/${question?.questionId}`}>
            <div className="lg:m-2 flex md:flex-row lg:flex-col ">
                <div className="text-sm text-gray-600 md:m-2">719 điểm</div>
                <div className="text-sm text-gray-600 md:m-2">27 trả lời</div>
                <div className="text-sm text-gray-600 md:m-2">308 lượt xem</div>
            </div>
            <div className="cursor-pointer">
                <div className="flex flex-row justify-between">
                    <div className="font-bold text-gray-700">
                        {question?.title}
                    </div>
                    <div className="font-bold"> 
                        $430 token
                    </div>
                </div>
                <div>
                    {question?.content}
                </div>
                <div className="flex flex-row items-center">
                    <div className="flex flex-row items-center m-1">
                        <label className="text-sm text-gray-500 p-1">Đăng bởi Do Quang Hop</label>
                        <img className="rounded-full object-cover h-8 w-8" src="https://i.pinimg.com/736x/f4/21/1e/f4211e816e639d059bedd015014cc54e.jpg"/>
                    </div>
                    <div className="bg-gray-300 w-1 h-1 m-2 rounded-full object-cover"/>
                    <div className="flex flex-row items-center">
                        <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.583 8.445h.01M10.86 19.71l-6.573-6.63a.993.993 0 0 1 0-1.4l7.329-7.394A.98.98 0 0 1 12.31 4l5.734.007A1.968 1.968 0 0 1 20 5.983v5.5a.992.992 0 0 1-.316.727l-7.44 7.5a.974.974 0 0 1-1.384.001Z"/></svg>
                        {question?.tags?.map(tag => (      
                            <div key={tag.tagId} className="m-2 p-1 bg-blue-50 rounded-sm text-sm">{tag.tagName}</div>
                        ))}
                    </div>
                    <div className="bg-gray-300 w-1 h-1 m-2 rounded-full object-cover"/>
                    <div className="text-sm text-gray-400">
                        5 phút trước
                    </div>
                </div>
            </div>
        </Link>
    )
}
export default QuestionCard;