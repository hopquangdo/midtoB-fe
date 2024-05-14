import React, { useState } from 'react';
import Header from '../../components/header/Header';
import UserOnline from '../../components/userOnline/UserOnline';
const StudyLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  };
  return (
    <div className='w-full h-screen '>
      <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} isHomeLayout={false}/>
      <div className='w-full overflow-y-auto' style={{ height: "calc(100vh - 60px)" }}>
          {children}
          <UserOnline/>
      </div>
    </div>
  )
}
export default StudyLayout;