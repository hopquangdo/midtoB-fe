import React, { useState } from "react";
import {BookIcon,SearchIcon,UploadIcon,SettingIcon, UniversityIcon} from "../../../assets/icon/index";
const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const Menus = [
    { title: "Khóa học",href:'/study/course',icon: <UniversityIcon/>},
    { title: "Hỏi đáp",href: '/study/faq', icon: <BookIcon/> },
    { title: "Tìm kiếm tài liệu",href: '/study/searchFile', icon: <SearchIcon /> },
    { title: "Đăng tài liệu",href:'/study/uploadFile', icon: <UploadIcon /> },
    { title: "Setting",href:'/study/settings', icon: <SettingIcon />, gap: true },
  ];

  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <div className={` ${open ? "w-72" : "w-20"} bg-gray-900 p-5 pt-1 relative duration-300`}
        onClick={()=>{setOpen(!open)}} >
        <ul className="pt-3">
        {Menus.map((menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 ${
                  menu.gap ? "mt-9" : "mt-2"
              } ${index === 0 && "bg-light-white"}`}
              >
              {menu.icon}
              <a href={menu.href} className={`${!open && "hidden"} origin-left duration-200`}>{menu.title}</a>
            </li>
        ))}
        </ul>
    </div>
  );
};

export default Sidebar;
