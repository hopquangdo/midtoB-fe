import React, { useState } from "react";
import TopMemberAnswer from "./components/TopMemberAnswer";
import HeaderQuestion from "./components/HeaderQuestion";
import FilterQuestion from "./components/FilterQuestion";
import CategoryQuestion from "./components/CategoryQuestion";
import QuestionCard from "./components/QuestionCard";
import Pagination from "../../../components/pagination/Pagination";
import SortQuestion from "./components/SortQuestion";
const QuestionPage = () => {
    const questions = [
        {questionId: 1,title:"Throw an error preventing a table update in a MySQL trigger1",
            content: "If I have a trigger before the update on a table, how can I throw an error that prevents the update on that table?",
            tags: [
                {tagId: 10, tagName: "MySQL"},
                {tagId: 11, tagName: "database"}
            ],
        },
        {questionId: 2,title:"Throw an error preventing a table update in a MySQL trigger2",
            content: "If I have a trigger before the update on a table, how can I throw an error that prevents the update on that table?",
            tags: [
                {tagId: 10, tagName: "MySQL"},
                {tagId: 11, tagName: "databasee"}
            ],
        },
        {questionId: 3,title:"Throw an error preventing a table update in a MySQL trigger3",
            content: "If I have a trigger before the update on a table, how can I throw an error that prevents the update on that table?",
            tags: [
                {tagId: 10, tagName: "MySQL"},
                {tagId: 11, tagName: "database"}
            ],
        },
        {questionId: 4,title:"Throw an error preventing a table update in a MySQL trigger4",
            content: "If I have a trigger before the update on a table, how can I throw an error that prevents the update on that table?",
            tags: [
                {tagId: 10, tagName: "MySQL"},
                {tagId: 11, tagName: "database"}
            ],
            },
        {questionId: 5,title:"Throw an error preventing a table update in a MySQL trigger5",
            content: "If I have a trigger before the update on a table, how can I throw an error that prevents the update on that table?",
            tags: [
                {tagId: 10, tagName: "MySQL"},
                {tagId: 11, tagName: "database"}
            ],
            },
        {questionId: 6,title:"Throw an error preventing a table update in a MySQL trigger6",
        content: "If I have a trigger before the update on a table, how can I throw an error that prevents the update on that table?",
            tags: [
                {tagId: 10, tagName: "MySQL"},
                {tagId: 11, tagName: "database"}
            ],
            },
        ];
    return (
        <div className="flex flex-col item-center justify-center ">
            <HeaderQuestion/>
            <div className="flex flex-row justify-center">
                <CategoryQuestion/>
                <div className="flex flex-col items-center">
                    <div className="flex flex-row items-center p-5 justify-between border-b border-gray-300 w-full overflow-x-auto">
                        <div className="flex flex-row items-center">
                            <svg class="w-6 h-6 text-gray-80 m-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.583 8.445h.01M10.86 19.71l-6.573-6.63a.993.993 0 0 1 0-1.4l7.329-7.394A.98.98 0 0 1 12.31 4l5.734.007A1.968 1.968 0 0 1 20 5.983v5.5a.992.992 0 0 1-.316.727l-7.44 7.5a.974.974 0 0 1-1.384.001Z"/>
                            </svg>
                            <p class="text-2xl font-semibold text-gray-90">Câu hỏi gần đây</p>
                        </div>
                        <FilterQuestion/>
                        <SortQuestion/>
                    </div>
                    <div>
                        {questions.map(question => (
                            <QuestionCard question={question}/>
                        ))}
                    </div>
                    <Pagination/>
                </div>
                <TopMemberAnswer/>
            </div>
        </div>
    );
}

export default QuestionPage;
