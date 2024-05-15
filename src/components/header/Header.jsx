import React, { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = ({ isSidebarOpen, setIsSidebarOpen, isHomeLayout }) => {
  const isLoggedIn = useSelector((state) => state.user.auth.isLoggedIn);
  const currentUser = useSelector((state) => state.user.auth.currentUser);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectNav, setSelectNav] = useState(1);
  const navigations = [
    { navId: 1, title: 'Trang chủ', href: '/home' },
    { navId: 2, title: 'Xu hướng', href: '/study/questions' },
    { navId: 3, title: 'Nhắn tin', href: '/home' },
    {
      navId: 4,
      title: 'Học tập',
      child: [
        {
          id: 1,
          title: 'Khóa học',
          href: '/study/course',
          icon: (
            <svg
              className="w-6 h-6 text-gray-800 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M11 4.717c-2.286-.58-4.16-.756-7.045-.71A1.99 1.99 0 0 0 2 6v11c0 1.133.934 2.022 2.044 2.007 2.759-.038 4.5.16 6.956.791V4.717Zm2 15.081c2.456-.631 4.198-.829 6.956-.791A2.013 2.013 0 0 0 22 16.999V6a1.99 1.99 0 0 0-1.955-1.993c-2.885-.046-4.76.13-7.045.71v15.081Z"
                clipRule="evenodd"
              />
            </svg>
          ),
        },
        {
          id: 2,
          title: 'Q&A',
          href: '/study/questions',
          icon: (
            <svg
              className="w-6 h-6 text-gray-800 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9.529 9.988a2.502 2.502 0 1 1 5 .191A2.441 2.441 0 0 1 12 12.582V14m-.01 3.008H12M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          ),
        },
        {
          id: 3,
          title: 'Tìm tài liệu',
          href: '/study/file',
          icon: (
            <svg
              className="w-6 h-6 text-gray-800 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M9 7V2.221a2 2 0 0 0-.5.365L4.586 6.5a2 2 0 0 0-.365.5H9Zm2 0V2h7a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9h5a2 2 0 0 0 2-2Zm.5 5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm0 5c.47 0 .917-.092 1.326-.26l1.967 1.967a1 1 0 0 0 1.414-1.414l-1.817-1.818A3.5 3.5 0 1 0 11.5 17Z"
                clipRule="evenodd"
              />
            </svg>
          ),
        },
      ],
    },
    { navId: 5, title: 'Hỏi đáp', href: '/study/questions' },
  ];
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className=" w-full flex flex-row items-center justify-between  border-b border-gray-200 h-[60px] px-3 py-3 lg:px-5 lg:pl-3">
      <div className="flex items-center justify-start rtl:justify-end">
        <button
          onClick={toggleSidebar}
          type="button"
          className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>
        <Link to={'/'} class="flex">
          <img
            src="https://i.ibb.co/Kb6FZSw/logo-huy-toan-XANH-TACH-NEN.png"
            className="h-8 me-3"
            alt=""
          />
          <span
            className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-gray-900"
            style={{ fontSize: '30px' }}
          >
            midto<span className="text-blue-700">B</span>
          </span>
        </Link>
      </div>
      <div className="hidden md:flex">
        {navigations.map((nav) => {
          if (nav.navId === 4)
            return (
              <div
                className="m-2 transition-all duration-300 border-2 border-transparent hover:border-b-[#1f2937] pb-1 flex items-center gap-1 relative group cursor-pointer"
                key={nav.navId}
              >
                {nav.title}
                <svg
                  className="-mr-1 h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>

                <div className="absolute z-10  hidden bg-grey-200 group-hover:block bottom-[-132px] min-w-[136px]">
                  <div className="bg-gray-200 shadow-lg p-3 translate-x-[-2px] translate-y-[12px] min-h-full">
                    <div className="flex flex-col gap-4">
                      {nav.child.map((e) => (
                        <div className="relative" key={e.id}>
                          <Link
                            className="before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1 before:opacity-0 before:transition-all before:duration-300 before:bg-[#1f2937] hover:before:w-full hover:before:opacity-100 flex gap-2"
                            to={e.href}
                          >
                            {e.icon}
                            {e.title}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          return (
            <Link
              to={nav.href}
              className="m-2 transition-all duration-300 border-2 border-transparent hover:border-b-[#1f2937] pb-1 flex items-center gap-1 relative group"
              key={nav.navId}
            >
              {nav.title}
            </Link>
          );
        })}
      </div>
      <div className="flex items-center">
        {isLoggedIn ? (
          <div className="flex items-center ms-3">
            <button
              onClick={toggleMenu}
              type="button"
              className="flex text-sm bg-gray-900 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-900"
            >
              <img
                className="w-8 h-8 rounded-full object-cover"
                src="https://i.pinimg.com/736x/25/cd/1b/25cd1b7785f43c30fe4a0e8dcf8b161c.jpg"
                alt="user photo"
              />
            </button>
            {isMenuOpen && (
              <div className="z-50 absolute top-10 right-5  my-4 text-base list-none divide-y rounded shadow bg-gray-900 divide-gray-900">
                <div className="px-4 py-3">
                  <p className="text-sm text-gray-900 dark:text-white">
                    {currentUser.firstName + ' ' + currentUser.lastName}
                  </p>
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300">
                    $40
                  </p>
                </div>
                <div className="py-1">
                  <Link
                    to={'/user/'}
                    class="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Trang cá nhân
                  </Link>
                  <Link
                    to="#"
                    class="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Ví
                  </Link>
                  <Link
                    to="#"
                    class="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Cài đặt
                  </Link>
                  <Link
                    to="#"
                    class="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Sign out
                  </Link>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="flex items-center ms-3">
            <Link to={'/login'}>Đăng nhập</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
