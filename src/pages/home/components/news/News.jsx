import { useState } from "react";

const News = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const newsList = [
        { newsId: 1, title: "Phát hiện hồ nước bí ẩn ‘treo’ lơ lửng trong hang Thung", content: "Một hồ nước bí ẩn nằm cao hơn hệ thống sông ngầm khoảng 15m vừa được phát hiện trong nhánh phụ của hang Thung (Vườn quốc gia Phong Nha - Kẻ Bàng)." },
        { newsId: 2, title: "'Hành tinh khỉ' - bom tấn đột phá về kỹ xảo", content: "Một hồ nước bí ẩn nằm cao hơn hệ thống sông ngầm khoảng 15m vừa được phát hiện trong nhánh phụ của hang Thung (Vườn quốc gia Phong Nha - Kẻ Bàng)." },
        { newsId: 3, title: "'Hành tinh khỉ' - bom tấn đột phá về kỹ xảo", content: "Một hồ nước bí ẩn nằm cao hơn hệ thống sông ngầm khoảng 15m vừa được phát hiện trong nhánh phụ của hang Thung (Vườn quốc gia Phong Nha - Kẻ Bàng)." },
        { newsId: 4, title: "'Hành tinh khỉ' - bom tấn đột phá về kỹ xảo", content: "Một hồ nước bí ẩn nằm cao hơn hệ thống sông ngầm khoảng 15m vừa được phát hiện trong nhánh phụ của hang Thung (Vườn quốc gia Phong Nha - Kẻ Bàng)." },
    ];

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === newsList.length - 1 ? 0 : prevSlide + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? newsList.length - 1 : prevSlide - 1));
    };

    return (
        <div  className="relative" data-carousel="static">
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {newsList.map((news, index) => (
                    <div key={news.newsId} className={`${index === currentSlide ? '' : 'hidden'} duration-700 ease-in-out absolute w-full h-full top-0 left-0`}>
                        <div className="max-w-[600px] mb-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{news.title}</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{news.content}</p>
                                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Đọc ngay
                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-10 left-1/2">
                {newsList.map((news, index) => (
                    <button
                        key={news.newsId}
                        type="button"
                        className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-gray-600' : 'bg-gray-300'}`}/>
                ))}
            </div>
            <button type="button"
                className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={prevSlide} >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-100 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button type="button"
                className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={nextSlide}>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-200 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    );
};

export default News;