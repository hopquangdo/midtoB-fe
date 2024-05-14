import React, { useState } from 'react';
import Post from './components/post/Post';
import SuggestFriends from './components/suggestFriends/SuggestFriends';
import News from './components/news/News';
import UserOnline from '../../components/userOnline/UserOnline';
const HomePage = () => {
  return (
    <div className='flex flex-row w-full justify-center'>
      <div className='m-2'>
        <Post/>
      </div>
      <div className='p-10 max-w-[600px]'>
        <News/>
        <SuggestFriends/>
      </div>
      <div>
        <UserOnline/>
      </div>
    </div>
  );
};

export default HomePage;
