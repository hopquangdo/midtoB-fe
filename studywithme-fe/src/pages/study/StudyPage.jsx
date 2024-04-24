import FileCard from "../../components/fileCard/FileCard";

const StudyPage = () => {
    const files = [
        {
            fileId: 1,
            banner: "https://tailieuhust.com/wp-content/uploads/2022/06/Nhap-mon-tri-tue-nhan-tao-1-1024x576.png?ezimgfmt=rs%3Adevice%2Frscb1-1",
            posterId: 1,
            avatarPoster: "https://inkythuatso.com/uploads/images/2021/12/logo-dai-hoc-xay-dung-inkythuatso-01-13-15-35-18.jpg",
            title: "Tài liệu Nhập môn trí tuệ nhân tạo",
            description: `Học máy là một lĩnh vực của trí tuệ nhân tạo liên quan tới việc nghiên cứu và xây dựng các kỹ thuật cho phép các hệ thống học tự động để giải quyết những vấn đề cụ thể.`,
            categories: [
                {
                categoryId: 1,
                category: "CNTT",
                },
                {
                    categoryId: 2,
                    category: "AI"
                }
            ],
            createdAt: "4/24/2023",
        },
        {
            fileId: 2,
            banner: "https://tailieuhust.com/wp-content/uploads/2022/04/nhap-mon-hoc-may-va-khai-pha-du-lieu-1-1024x683.jpg?ezimgfmt=rs%3Adevice%2Frscb1-1",
            posterId: 1,
            avatarPoster: "https://career.gpo.vn/uploads/images/truong-hoc/logo-hust.png",
            title: "Tài liệu môn Nhập môn học máy và khai phá dữ liệu",
            description: `Học máy là một lĩnh vực của trí tuệ nhân tạo liên quan tới việc nghiên cứu và xây dựng các kỹ thuật cho phép các hệ thống học tự động để giải quyết những vấn đề cụ thể. `,
            categories: [
                {
                categoryId: 1,
                category: "CNTT",
                },
                {
                    categoryId: 2,
                    category: "AI"
                }
            ],
            createdAt: "4/24/2023",
        },
    ];
    return (
        <div className="">
            <label
                class="mx-auto mt-20 relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300"
                for="search-bar">
                <input id="search-bar" placeholder="Bạn đang cần tìm tài liệu gì?"
                    class="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white"/>
                <button
                    class="w-full md:w-auto px-6 py-3 bg-black border-black text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all disabled:opacity-70">
                    
                    <div class="relative">
                        <div
                            class="flex items-center justify-center h-3 w-3 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 transition-all">
                            <svg class="opacity-0 animate-spin w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                    stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                </path>
                            </svg>
                        </div>

                        <div class="flex items-center transition-all opacity-1 valid:"><span
                                class="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                                Tìm kiếm
                            </span>
                        </div>

                    </div>
                    
                </button>
            </label>
            {files.map(file => {
                return (
                    <FileCard file={file}/>
                )
            })}
        </div>
    )
}
export default StudyPage;