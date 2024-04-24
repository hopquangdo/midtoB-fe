import React,{useEffect,useState} from "react";
import svg from "../../../assets/svg/svg";
import { useDispatch, useSelector } from 'react-redux';
import {loginUser} from "../../../redux/auth/authRequest";
import { useNavigate } from "react-router-dom";
import Loading from "../../../components/loading/Loading";
const LoginPage = () => {
  const [userName,setUserName] = useState(null);
  const [password,setPassword] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.login.isLoggedIn)
  const auth = useSelector((state) => state.auth.login.auth);
  const [isLoading,setLoading] = useState(false); 
  const handleLogin = () => {
    setLoading(true);
    if (!userName || !password) {
      alert("Vui lòng nhập đầy đủ thông tin đăng nhập!");
      return;
    }
    console.log(userName,password);
    loginUser({email: userName, password: password}, dispatch);
    setLoading(false);
  }
  
  useEffect(() => {
    if (isLoggedIn) {
      alert("Đăng nhập thành công!");
      navigate("/");
    }
  }, [isLoggedIn, navigate]);
  return ( isLoading ? (null) : (
    <div class="flex h-screen">
      <div class="hidden lg:flex items-center justify-center flex-1 bg-white text-black">
        <div class="max-w-md text-center">
          <img src={svg.bannerAuth}/>
        </div>
      </div>
        <div class="w-full bg-gray-100 lg:w-1/2 flex justify-center">
          <div class="max-w-md w-full p-6">
            <h1 class="text-3xl font-semibold mb-6 text-black text-center">
              Đăng nhập
            </h1>
            <form method="POST" className="space-y-4">
              <div>
                <label htmlFor="email" class="block text-sm font-medium text-gray-700">Email</label>
                <input type="text" id="email" name="email" 
                value={userName}
                onChange={(e) => setUserName(e.target.value)} 
                class="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"/>
              </div>
              <div>
                <label htmlFor="password" class="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" id="password" name="password" class="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                  value={password}  
                  onChange={(e) => setPassword(e.target.value)}/>
              </div>
              <div>
                <button type="button" className="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
                  onClick={handleLogin}>
                  Đăng nhập
                </button>
              </div>
            </form>
            <div class="mt-4 text-sm text-gray-600 text-center">
              <p>Bạn chưa có tài khoản? <a href="/register" class="text-black hover:underline">Đăng ký tại đây</a>
              </p>
            </div>
            <div class="mt-4 text-sm text-gray-600 text-center">
              <p>hoặc</p>
            </div>
            <div class="mt-4 flex flex-col lg:flex-row items-center justify-between">
              <div class="w-full lg:w-1/2 mb-2 lg:mb-0">
                <button type="button" class="w-full flex justify-center items-center gap-2 bg-white text-sm text-gray-600 p-2 rounded-md hover:bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-colors duration-300">
                  <img src={svg.googleIcon} className="w-4"/>
                  Đăng nhập với Google </button>
              </div>
              {/* <div class="w-full lg:w-1/2 ml-0 lg:ml-2">
                <button type="button" class="w-full flex justify-center items-center gap-2 bg-white text-sm text-gray-600 p-2 rounded-md hover:bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-colors duration-300">
                  <img src={svg.githubIcon} className="w-4"/>
                  Sign Up with Github 
                  </button>
              </div>  */}
            </div>
          </div>
        </div>
    </div>)
  )
}
export default LoginPage;