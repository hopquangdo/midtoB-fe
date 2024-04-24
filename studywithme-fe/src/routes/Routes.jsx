import HomePage from "../pages/home/HomePage";
import StudyPage from "../pages/study/StudyPage";
import JobPage from "../pages/job/JobPage";
import LoginPage from "../pages/auth/login/LoginPage";
import RegisterPage from "../pages/auth/register/RegisterPage";
import ProfilePage from "../pages/profile/Profile";
const publicRoutes = [
    {path: '/home',component: HomePage},
    {path: '/',component: HomePage},
    {path: '/study',component: StudyPage},
    {path: '/jobs',component: JobPage},
    {path: '/user/:userId',component: ProfilePage},
    {path: '/login',component:LoginPage},
    {path: '/register',component:RegisterPage}
]
export {publicRoutes};