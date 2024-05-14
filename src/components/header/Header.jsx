import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = ({isSidebarOpen,setIsSidebarOpen,isHomeLayout}) => {
  const isLoggedIn = useSelector((state) => state.user.auth.isLoggedIn);
  const currentUser = useSelector((state) => state.user.auth.currentUser);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const [selectNav,setSelectNav] = useState(1);
  const navigations = [
    {navId: 1,title:"Trang chủ",href:"/home"},
    {navId: 2,title:"Hỏi đáp",href:"/study/questions"},
    {navId: 3,title:"Tìm tài liệu",href:"/home"}
  ]
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div class=" w-full flex flex-row items-center justify-between  border-b border-gray-200 h-[60px] px-3 py-3 lg:px-5 lg:pl-3">
      <div class="flex items-center justify-start rtl:justify-end">
        <button onClick={toggleSidebar} type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
          </svg>
        </button>
        <Link to={"/"} class="flex">
          <img src="https://i.ibb.co/Kb6FZSw/logo-huy-toan-XANH-TACH-NEN.png" class="h-8 me-3" alt="" /> 
          <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-gray-900" style={{fontSize:"30px"}}>midto<span className="text-blue-700">B</span></span>
        </Link>
      </div>
      <div className="hidden sm:flex">
        {navigations.map((nav) => (
          <Link to={nav.href} className="m-2">
            {nav.title}
          </Link>
        ))}
      </div>
      <div className="flex items-center">
        {isLoggedIn ? (
              <div className="flex items-center ms-3">
                <button onClick={toggleMenu} type="button" className="flex text-sm bg-gray-900 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-900" >
                  <img className="w-8 h-8 rounded-full object-cover" src="https://i.pinimg.com/736x/25/cd/1b/25cd1b7785f43c30fe4a0e8dcf8b161c.jpg" alt="user photo"/>
                </button>
                {isMenuOpen && (
                  <div className="z-50 absolute top-10 right-5  my-4 text-base list-none divide-y rounded shadow bg-gray-900 divide-gray-900" >
                    <div className="px-4 py-3">
                        <p className="text-sm text-gray-900 dark:text-white">
                          {currentUser.firstName + " " + currentUser.lastName}
                        </p>
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-gray-300">
                          $40
                        </p>
                    </div>
                    <div class="py-1" >
                      <Link to={"/user/"} class="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white">
                        Trang cá nhân
                      </Link>
                      <Link to="#" class="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white">
                        Ví
                      </Link>
                      <Link to="#" class="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white">
                        Cài đặt
                      </Link>
                      <Link to="#" class="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white">
                        Sign out
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ): (
              <div className="flex items-center ms-3">
                <Link to={"/login"}>
                  Đăng nhập
                </Link>
              </div>
            )}
      </div>
    </div>
  );
};

export default Header;
