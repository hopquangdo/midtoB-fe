import React, { useState } from 'react';
import { Avatar, Button, Card, Input, Upload, message } from 'antd';
import { VideoCameraOutlined, UploadOutlined } from '@ant-design/icons';
import ListPost from "../../components/listPost/ListPost";
import SharePost from '../../components/sharePost/SharePost';
import FriendCard from '../../components/friendCard/FriendCard';
import ProfileCard from '../../components/profileCard/ProfileCard';
const { TextArea } = Input;

const HomePage = () => {
  return (
    <section>
      <div className="container px-6 mx-auto pt-5">
        <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
          <div className="col-span-4 lg:col-span-3 hidden md:block">
            <ProfileCard/>
          </div>
          <div className=" col-span-4 lg:col-span-6 flex flex-col justify-center">
            <SharePost/>
            <ListPost />
          </div>
          <div className="col-span-4 lg:col-span-3 hidden md:block">
            <FriendCard /> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
