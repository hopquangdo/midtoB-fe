import React, { useEffect, useState } from "react";
import Layout from "../../../layouts/study-page/Layout";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const QuestionPage = () => {
    const [title,setTitle] = useState("");
    const [value, setValue] = useState('');
    const toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike'],        // các nút bật/tắt
        ['blockquote', 'code-block'],
        ['link', 'image', 'formula'],
        [{ 'header': 1 }, { 'header': 2 }],               // các giá trị nút tùy chỉnh
        [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],      // chữ viết nhỏ/chữ viết lớn
        [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // hướng văn bản
        [{ 'size': ['small', false, 'large', 'huge'] }],  // menu thả xuống tùy chỉnh
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'color': [] }, { 'background': [] }],          // menu thả xuống mặc định từ chủ đề
        [{ 'font': [] }],
        [{ 'align': [] }],
        ['clean']                                         // nút loại bỏ định dạng
    ];
    useEffect(()=>{
        console.log(value);
    },[value])
    return (
        <Layout>
            <div class="max-w-xl mx-auto">
                <label class="block mb-2">
                    <span class="text-gray-700">Tiêu đề</span>
                    <input type="text" placeholder="Nhập tiêu đề" class="bg-gray-100 mt-1 block w-full" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
                </label>
                <div class="border border-gray-300 rounded-md">
                    <div class="bg-gray-100 border-b border-gray-300 px-4 py-2">
                        <span class="text-gray-700">Nội dung</span>
                    </div>
                    <div class="p-4">
                    <ReactQuill 
                            className="mx-auto h-auto" 
                            theme="snow" 
                            value={value}
                            onChange={setValue} // Cập nhật giá trị khi thay đổi
                            modules={{ toolbar: toolbarOptions }}/>        
                    </div>
                </div>
                <button class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Đăng</button>
            </div>
        </Layout>
    );
}

export default QuestionPage;
