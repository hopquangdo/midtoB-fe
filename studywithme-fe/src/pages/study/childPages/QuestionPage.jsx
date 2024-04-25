import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const QuestionPage = () => {
    const [value, setValue] = useState('');

    // Các tuỳ chọn cho thanh công cụ
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
            <label className="flex flex-col">
                <span>Tiêu đề</span>
                <input placeholder="Tiêu đề"/>
            </label>
            <ReactQuill 
                className="mx-auto h-auto" 
                theme="snow" 
                value={value}
                onChange={setValue} // Cập nhật giá trị khi thay đổi
                modules={{ toolbar: toolbarOptions }} // Chuyển đổi các tuỳ chọn thanh công cụ thành modules
            />
            <button>Đăng</button>
        </Layout>
    );
}

export default QuestionPage;
