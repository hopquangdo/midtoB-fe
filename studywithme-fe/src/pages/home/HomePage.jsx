import React, { useState } from 'react';
import ListPost from "./components/listPost/ListPost";
import SharePost from './components/sharePost/SharePost';
import ProfileCard from '../../components/profileCard/ProfileCard';

const HomePage = () => {
  return (
    <section>
      <div className="container px-6 mx-auto pt-5">
        <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
          <div className="col-span-4 lg:col-span-3 hidden md:block">
            <ProfileCard/>
          </div>
          <div className=" col-span-4 lg:col-span-9 flex flex-col justify-center items-center ">
            <SharePost/>
            <ListPost />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
