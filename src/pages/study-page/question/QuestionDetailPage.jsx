import { Link } from "react-router-dom";
import Answer from "./components/answer/Answer";
import React, { useState } from "react";
import QuestionRelated from "./components/QuestionRelated";
import Rating from "../../../components/rating/Rating";
import HeaderQuestion from "./components/HeaderQuestion";
const QuestionDetailPage = () => {
    const [isCurrentUser,setCurrentUser] = useState(false);
    const [reviewScore,setReviewScore] = useState(0);
    const [isFollowQuestion,setFollowQuestion] = useState(true);
    const [showInputAnswer,setShowInputAnswer] = useState(false);
    return (
        <div>
            <HeaderQuestion/>
            <div className="flex flex-row border-b border-gray-300 p-2">
                <div>
                    <div>
                        <p className="text-3xl font-black text-gray-800">
                            How to load source content when the source was changed in vscode debugger
                        </p>
                    </div>
                    <div className="flex flex-row items-center">
                        <div className="flex flex-row items-center m-1">
                            <label className="text-sm text-gray-500 p-1">Đăng bởi Hop</label>
                            <img className="rounded-full object-cover h-8 w-8" src="https://i.pinimg.com/736x/f4/21/1e/f4211e816e639d059bedd015014cc54e.jpg"/>
                        </div>
                        <div className="bg-gray-300 w-1 h-1 m-2 rounded-full object-cover"/>
                        <div className="flex flex-row items-center justify-center m-1">
                            <svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.583 8.445h.01M10.86 19.71l-6.573-6.63a.993.993 0 0 1 0-1.4l7.329-7.394A.98.98 0 0 1 12.31 4l5.734.007A1.968 1.968 0 0 1 20 5.983v5.5a.992.992 0 0 1-.316.727l-7.44 7.5a.974.974 0 0 1-1.384.001Z"/>
                            </svg>
                            <Link className="relevate left-1">Java</Link>
                        </div>
                        <div className="bg-gray-300 w-1 h-1 m-2 rounded-full object-cover"/>
                        <div className="flex flex-row items-center justify-center m-1">
                            <div className="text-gray-600">5 phút trước</div>
                        </div>
                        <button className="m-2">
                            <svg className=" text-gray-800" width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4 1C3.44772 1 3 1.44772 3 2V22C3 22.5523 3.44772 23 4 23C4.55228 23 5 22.5523 5 22V13.5983C5.46602 13.3663 6.20273 13.0429 6.99251 12.8455C8.40911 12.4914 9.54598 12.6221 10.168 13.555C11.329 15.2964 13.5462 15.4498 15.2526 15.2798C17.0533 15.1004 18.8348 14.5107 19.7354 14.1776C20.5267 13.885 21 13.1336 21 12.3408V5.72337C21 4.17197 19.3578 3.26624 18.0489 3.85981C16.9875 4.34118 15.5774 4.87875 14.3031 5.0563C12.9699 5.24207 12.1956 4.9907 11.832 4.44544C10.5201 2.47763 8.27558 2.24466 6.66694 2.37871C6.0494 2.43018 5.47559 2.53816 5 2.65249V2C5 1.44772 4.55228 1 4 1ZM5 4.72107V11.4047C5.44083 11.2247 5.95616 11.043 6.50747 10.9052C8.09087 10.5094 10.454 10.3787 11.832 12.4455C12.3106 13.1634 13.4135 13.4531 15.0543 13.2897C16.5758 13.1381 18.1422 12.6321 19 12.3172V5.72337C19 5.67794 18.9081 5.66623 18.875 5.68126C17.7575 6.18804 16.1396 6.81972 14.5791 7.03716C13.0776 7.24639 11.2104 7.1185 10.168 5.55488C9.47989 4.52284 8.2244 4.25586 6.83304 4.3718C6.12405 4.43089 5.46427 4.58626 5 4.72107Z" fill="#0F0F0F"/>
                            </svg>
                        </button>
                        <div className="bg-gray-300 w-1 h-1 m-2 rounded-full object-cover"/>

                        {isCurrentUser ? (
                            <React.Fragment>
                                <button type="button" className="m-2 text-white bg-blue-500 hover:bg-blue-600 focus:outline-none  font-medium rounded-full text-sm px-5 py-1.5 text-center me-2 mb-2 ">
                                    Chỉnh sửa
                                </button>
                                <button type="button" className="m-2 text-white bg-red-500 hover:bg-red-600 focus:outline-none  font-medium rounded-full text-sm px-8py-1.5 text-center me-2 mb-2 "
                                        onClick={()=>{setShowInputAnswer(!showInputAnswer)}}>
                                    Xóa
                                </button>
                            </React.Fragment>
                        ) : (
                            <Rating reviewScore={reviewScore} setReviewScore={setReviewScore}/>
                        )}
                    </div>
                </div>
                <div className="w-[200px] flex flex-col items-center bg-gray-100 justify-center rounded-lg">
                    <div className="flex flex-col items-center">
                        <label className="text-gray-400 text-xs">
                           Bạn sẽ nhận được
                        </label>
                        <div className="font-bold">
                            $430 token
                        </div>
                    </div>
                    <button type="button" className="m-3 text-white bg-blue-700 hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-8
                     py-2.5 text-center me-2 mb-2 "
                        onClick={()=>{setShowInputAnswer(!showInputAnswer)}}>
                        Trả lời
                    </button>
                </div>
            </div>
            <div className="flex flex-row border-b border-gray-300 pl-4 pr-7 pb-2 pt-2">
                <div className="flex flex-col items-center pr-5">
                    <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M5.575 13.729C4.501 15.033 5.43 17 7.12 17h9.762c1.69 0 2.618-1.967 1.544-3.271l-4.881-5.927a2 2 0 0 0-3.088 0l-4.88 5.927Z" clip-rule="evenodd"/>
                    </svg>
                    <div>{12}</div>
                    <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M18.425 10.271C19.499 8.967 18.57 7 16.88 7H7.12c-1.69 0-2.618 1.967-1.544 3.271l4.881 5.927a2 2 0 0 0 3.088 0l4.88-5.927Z" clip-rule="evenodd"/>
                    </svg>
                    {isFollowQuestion ? (
                        <svg className="w-5 h-5 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"
                            onClick={() => {setFollowQuestion(!isFollowQuestion)}}>
                            <path d="M7.833 2c-.507 0-.98.216-1.318.576A1.92 1.92 0 0 0 6 3.89V21a1 1 0 0 0 1.625.78L12 18.28l4.375 3.5A1 1 0 0 0 18 21V3.889c0-.481-.178-.954-.515-1.313A1.808 1.808 0 0 0 16.167 2H7.833Z"/>
                        </svg>
                        ) : (
                        <svg className="w-6 h-6 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"
                            onClick={() => {setFollowQuestion(!isFollowQuestion)}}>
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m17 21-5-4-5 4V3.889a.92.92 0 0 1 .244-.629.808.808 0 0 1 .59-.26h8.333a.81.81 0 0 1 .589.26.92.92 0 0 1 .244.63V21Z"/>
                        </svg>
                    )}
                </div>
                <div>
                    I am implementing custom functionality while debugging a remote program. Once I add new functionality I have to change the source content of the debugge.how to achieve this. I tried loadedsource event reason change in dap but it’s not working.
                    Once I add new functionality I have to change the source content of the debugge.how to achieve this. I tried loadedsource event reason change in dap but it’s not working
                    <img className="p-5" src="https://img.hoidap247.com/picture/question/20240514/large_1715622989464.jpg?v=0"/>
                </div>
            </div>
            <div className="flex flex-row">
                <Answer showInputAnswer={showInputAnswer}/>
                <QuestionRelated/>
            </div>
        </div>
    )
}
export default QuestionDetailPage;