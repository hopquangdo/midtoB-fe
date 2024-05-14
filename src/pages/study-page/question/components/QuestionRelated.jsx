import { Link } from "react-router-dom";

const QuestionRelated = () => {
    const questions = [
        {questionId: 1,score: 55,title:"Android 8: Cleartext HTTP traffic not permitted"},
        {questionId: 2,score: 66,title:"Android emulator not able to access"},
        {questionId: 3,score: 54,title:"Android 8: Cleartext HTTP traffic not permitted"},
        {questionId: 4,score: 32,title:"How to check internet access on Android?"},
        {questionId: 5,score: 324,title:"Android 8: Cleartext HTTP traffic not permitted"},
        {questionId: 6,score: 2345,title:"Connect to WiFi Which Doesn't Have Internet"},
    ]
    const shortenTitle = (title) => {
        if (title.length > 40) {
            return title.substring(0, 40) + "...";
        } else {
            return title;
        }
    };
    return (
        <div className="min-w-[350px] border boder-gray-900 h-full p-2 m-3 rounded-lg">
            <label className="font-bold text-gray-900">Câu hỏi liên quan</label>
            {questions.map((question) => (
                <div className="flex flex-row items-center m-2">
                    <div className="flex-none mr-2 bg-red-500 text-white text-sm  font-bold w-8 h-8 rounded-full flex items-center justify-center">
                        {question.score}
                    </div>
                    <Link className="flex-none text-sm">
                        {shortenTitle(question.title)}
                    </Link>
                </div>
            ))}
        </div>
    )
}
export default QuestionRelated;