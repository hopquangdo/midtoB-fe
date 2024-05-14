import React,{ useState,useRef,useEffect } from 'react';
import svg from "../../../assets/svg/svg";
import AvatarUpload from "../../../components/avatarUpload/AvatarUpload";
const RegisterPage = () => {
  const [avatar, setAvatar] = useState(null); // State để lưu trữ hình ảnh avatar


  const handleAvatarChange = (newAvatar) => {
    setAvatar(newAvatar);
  };
  return (
    <div className="flex h-screen">
      <div className="hidden lg:flex items-center justify-center flex-1 bg-white text-black">
        <div className="max-w-md text-center">
          <img src={svg.bannerAuth} alt="Banner"/>
        </div>
      </div>
      <div className="w-full bg-gray-100 lg:w-1/2 flex justify-center">
        <div className="max-w-md w-full p-6">
          <h1 className="text-3xl font-semibold mb-6 text-black text-center">Đăng ký</h1>
          <form action="#" method="POST" className="space-y-4">
            <div className="flex flex-row">
              <div className="mr-3">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">Họ</label>
                <input type="text" id="firstName" name="firstName" className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
              </div>
              <div className="ml-3">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Tên</label>
                <input type="text" id="lastName" name="lastName" className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="text" id="email" name="email" className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" id="password" name="password" className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
            </div>
            <div className="flex  lg:flex-row items-center">
              <div className="w-full lg:w-1/2 lg:pr-2 mr-3">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Địa chỉ</label>
                <input type="text" id="address" name="address" className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
              </div>
              <div className="w-full lg:w-1/2 lg:pl-2 ml-3">
                <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Ngày sinh</label>
                <input type="date" id="dob" name="dob" className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
              </div>
            </div>
            <div className="">
                <label htmlFor="avatar" className="block text-sm font-medium text-gray-700">Avatar</label>
                {/* <input type="file" id="avatar" name="avatar" accept="image/*" className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" /> */}
                <AvatarUpload
                id="avatar"
                name="avatar"
                onChange={handleAvatarChange} // Truyền hàm xử lý khi thay đổi avatar
              />
            </div>
            <div>
              <button type="submit" className="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300">
                Đăng ký
              </button>
            </div>
          </form>
          <div className="mt-4 text-sm text-gray-600 text-center">
            <p>Bạn đã có tài khoản? 
              <a href="/login" className="text-black hover:underline">
                Đăng nhập tại đây
              </a>
            </p>
          </div>
          <div className="mt-4 text-sm text-gray-600 text-center">
            <p>hoặc</p>
          </div>
          <div className="mt-4 flex flex-col lg:flex-row items-center justify-between">
            <div className="w-full lg:w-1/2 mb-2 lg:mb-0">
              <button type="button" className="w-full flex justify-center items-center gap-2 bg-white text-sm text-gray-600 p-2 rounded-md hover:bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-colors duration-300">
                <img src={svg.googleIcon} className="w-4" alt="Google" />
                Sign Up with Google 
              </button>
            </div>
            {/* <div className="w-full lg:w-1/2 ml-0 lg:ml-2">
              <button type="button" className="w-full flex justify-center items-center gap-2 bg-white text-sm text-gray-600 p-2 rounded-md hover:bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-colors duration-300">
                <img src={svg.githubIcon} className="w-4" alt="Github" />
                Sign Up with Github 
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
