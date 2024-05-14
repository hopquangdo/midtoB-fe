import React, { useState } from 'react';
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
const HomeLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Thêm biến trạng thái để kiểm soát việc hiển thị menu

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Cập nhật trạng thái khi click vào avatar
  };
  return (
    <div className='w-full h-screen '>
      <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} isHomeLayout={true}/>
      <div className='flex flex-row w-full' style={{ height: "calc(100vh - 60px)" }}>
        <Sidebar isSidebarOpen={isSidebarOpen}/>
        <div class="sm:ml-60 w-full overflow-y-auto">
          {children}
          
        </div>
      </div>
    </div>
  )
}
export default HomeLayout;