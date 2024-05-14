import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const FilterQuestion = () => {
    const [selectQuestionNav, setSelectQuestionNav] = useState(1);

    const questionsNav = [
        {navId: 1, content: "Mới nhất", ref: "/#"},
        {navId: 2, content: "Đã trả lời", ref: "/#"},
        {navId: 3, content: "Chưa trả lời", ref: "/#"},
    ];

    return (
        <div>   
            <div>
                <select className={`block lg:hidden w-full py-2 px-4 mb-2 border border-gray-300 rounded-md`} onChange={(e) => setSelectQuestionNav(parseInt(e.target.value))} value={selectQuestionNav}>
                    {questionsNav.map((nav) => (
                        <option key={nav.navId} value={nav.navId}>{nav.content}</option>
                    ))}
                </select>
            </div>
            <div className={`hidden lg:flex flex-wrap  min-w-[330px] justify-center text-sm font-medium text-center text-gray-500 border border-gray-300 rounded-lg p-2`}>
                {questionsNav.map((nav) => (
                    <div key={nav.navId} className="me-2" onClick={() => {setSelectQuestionNav(nav.navId)}}>
                        <Link to={""} className={`inline-block px-4 py-3 ${selectQuestionNav === nav.navId ? "text-white bg-gray-900" : "text-gray-500 bg-white"} rounded-lg active`}>
                            {nav.content}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FilterQuestion;
