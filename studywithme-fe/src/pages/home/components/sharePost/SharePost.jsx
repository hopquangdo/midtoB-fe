import React, { useState, useEffect } from 'react';

const Share = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 492);
    };

    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className={`w-full bg-white shadow-md rounded-md p-4 mx-4 my-6 md:max-w-md lg:max-w-[700px] ${isSmallScreen ? 'h-auto' : 'h-32'}`}>
      <div className="flex items-center">
        <img
          src="https://th.bing.com/th/id/OIP.IazLq_U8UvpVctzrO7sinwHaHa?rs=1&pid=ImgDetMain"
          alt=""
          className="w-10 h-10 rounded-full mr-4"
        />
        <input
          type="text"
          placeholder="Bạn đang nghĩ gì?"
          className="flex-grow p-2 border rounded-md outline-none"
        />
      </div>
      <hr className="my-2 border-t" />
      <div className="flex justify-between items-center">
        <input type="file" id="file" className="hidden" />
        <div className="flex items-center cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
          {!isSmallScreen && <span> Ảnh</span>}
        </div>
        <div className="flex items-center cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>
          {!isSmallScreen && <span>Địa điểm</span>}
        </div>
        <div className="flex items-center cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
            />
          </svg>
          {!isSmallScreen && <span>Gắn thẻ</span>}
        </div>
        <button className="px-4 py-2 bg-gray-900 text-white rounded-md cursor-pointer hover:bg-gray-800 transition duration-300">Share</button>
      </div>
    </div>
  );
};

export default Share;
