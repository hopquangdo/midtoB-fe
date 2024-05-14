import ReactQuill from "react-quill";
const AnswerInput = () => {
    return (
        <div className="px-3 border border-gray-300 mx-8">
            <div className="flex flex-row items-center m-3">
                <img className="rounded-full object-cover h-8 w-8" src="https://i.pinimg.com/736x/f4/21/1e/f4211e816e639d059bedd015014cc54e.jpg"/>
                <label className="text-sm font-medium text-gray-900 p-1">Do Quang Hop</label>
            </div>
            <ReactQuill/>
            <button type="button" className="text-white m-2 font-medium rounded-full text-sm px-8 py-2.5 text-center me-2 mb-2 bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-4  ">
                Đăng
            </button>
        </div>
    )
}
export default AnswerInput;