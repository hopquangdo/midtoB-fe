import { useState } from "react";
import { Link } from "react-router-dom";
const HeaderQuestion = () => {
    const [selectQuestionType,setSelectQuestionType] = useState(1);

    return (
        <div className="flex flex-row items-center justify-between p-3 bg-white border-b border-gray-200" >
            <button type="button" class="inline-block rounded bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-dark-3 transition duration-150 ease-in-out hover:bg-neutral-700 hover:shadow-dark-2 focus:bg-neutral-700 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-dark-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                onClick={() => {setSelectQuestionType(selectQuestionType === 1 ? 2 : 1)}}>
                {selectQuestionType === 1 ? 'Câu hỏi của tôi' : 'Tất cả'}
            </button>
            <div className="flex flex-row p-1 bg-gray-100 rounded-lg items-center">
                <svg class="w-6 h-6 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
                </svg>
                <input placeholder="Tìm kiếm..." className="p-1 bg-transparent focus:bg-none"/>
            </div>
            <Link to={"/study/questions/ask"}  className="inline-block rounded bg-red-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-dark-3 transition duration-150 ease-in-out hover:bg-neutral-700 hover:shadow-dark-2 focus:bg-neutral-700 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-dark-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
                Đặt câu hỏi
            </Link>
        </div>
    )
}
export default HeaderQuestion;