import React, { useEffect, useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import questionApi from "../../../services/apis/study/questionApi";
import notify from "../../../components/notification/Notification";

const AskPage = () => {
    const [title, setTitle] = useState("");
    const [category,setCategory] = useState("");
    const [value, setValue] = useState('');
    const [htmlContent, setHtmlContent] = useState('');

    const toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block'],
        ['link', 'image', 'formula'],
        [{ 'header': 1 }, { 'header': 2 }],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],
        [{ 'indent': '-1'}, { 'indent': '+1' }],
        [{ 'direction': 'rtl' }],
        [{ 'size': ['small', false, 'large', 'huge'] }],
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'font': [] }],
        [{ 'align': [] }],
        ['clean']
    ];

    const handleChangeValue = (html) => {
        setValue(html);
        setHtmlContent(html);
    }

    useEffect(() => {
        console.log(htmlContent);
    }, [htmlContent]);

    const handleCreateQuestion = async () => {
        if ((title != null && title != "" )
            && (category != null && category != "") 
            && (value != null && value != "")) {
            // console.log(title, category, value)

            const formData = new FormData();
            formData.append('subjectId', 1);
            formData.append('title', title);
            formData.append('content', value);
            const response = await questionApi.createQuestion(formData);
            console.log(response)
            if (response.status == "OK") {
                setTitle("");
                setCategory("");
                setValue(""); 
                notify.success("Đăng bài thành công!");
            } else {
                // notify.error("Đăng bài thất bại!");
            }
        } else {
            notify.warn("Bạn hãy điền đủ nội dung!");
        }
    }

    return (
        <div className="max-w-xl mx-auto flex flex-col items-center m-1">
        <label className="block mb-2 w-full">
            <span className="text-gray-700 text-xl font-medium">Tiêu đề</span>
            <input type="text" placeholder="Nhập tiêu đề" className="p-2 bg-gray-200 mt-1 block w-full rounded-lg h-10" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
        </label>
        <label className="block mb-2 w-full">
            <span className="text-gray-700">Danh mục</span>
            <input type="text" placeholder="Toán, Vật lý, Lập trình,..." className="p-2 bg-gray-200 mt-1 block w-full rounded-lg h-10" value={category} onChange={(e)=>{setCategory(e.target.value)}}/>
        </label>
        <div className="border border-gray-300 rounded-md">
            <div className="bg-gray-100 border-b border-gray-300 px-4 py-2">
                <span className="text-gray-700">Nội dung</span>
            </div>
            <div className="p-4">
                <ReactQuill 
                    className="mx-auto h-auto" 
                    theme="snow" 
                    value={value}
                    onChange={handleChangeValue}
                    modules={{ toolbar: toolbarOptions }}
                />
                {/* <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div> */}
            </div>
        </div>
        <button className="mt-4 px-20 py-2 bg-gray-500 text-white rounded hover:bg-gray-600" onClick={handleCreateQuestion}>Đăng</button>
    </div>
    );
}

export default AskPage;
