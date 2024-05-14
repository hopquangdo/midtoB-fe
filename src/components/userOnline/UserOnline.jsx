import React, { useState } from 'react';

const UserOnline = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };
  const onlineUsers = [
    { userId: 1,avatar:"https://i.pinimg.com/564x/ca/09/b3/ca09b3f8e931852307dc0b96091f7d6c.jpg" },
    { userId: 2,avatar:"https://i.pinimg.com/736x/d7/15/0d/d7150d8afac427c6925d1f98c0ee8df2.jpg" },
    { userId: 3,avatar:"https://i.pinimg.com/736x/25/cd/1b/25cd1b7785f43c30fe4a0e8dcf8b161c.jpg"},
];
  return (
    <div className="fixed bottom-6 right-6 group">
      <div className={`${isExpanded ? '' : 'hidden'}`}>
        {onlineUsers.map(user => (
          <div key={user.id} className="flex items-center bg-transparent py-2 relative">
            <img className='w-12 h-12 rounded-full object-cover cursor-pointer' src={user.avatar}/>
            <div className=" absolute right-0  bottom-1 w-3 h-3 bg-green-500 rounded-full"/> 
          </div>
        ))}
      </div>
      <button type="button" className="flex items-center justify-center my-2 text-white bg-gray-700 rounded-full w-12 h-12  hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 focus:outline-none "
        onClick={toggleMenu}>
        <svg className={`w-5 h-5 transition-transform ${isExpanded ? 'rotate-45' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
        </svg>
        <span className="sr-only">Open actions menu</span>
      </button>
    </div>
  );
};

export default UserOnline;
