import HomePage from "../pages/home/HomePage";
import { StudyPage,SearchFilePage,QuestionPage } from "../pages/study/index";
import JobPage from "../pages/job/JobPage";
import LoginPage from "../pages/auth/login/LoginPage";
import RegisterPage from "../pages/auth/register/RegisterPage";
import ProfilePage from "../pages/profile/Profile";
import CoursePage from "../pages/study/childPages/CoursePage";

const publicRoutes = [
    { path: '/home', component: HomePage },
    { path: '/', component: HomePage },

    { path: '/study', component: StudyPage },
    { path: '/study/course', component: CoursePage},
    { path: '/study/search-file', component: SearchFilePage },
    { path: '/study/questions', component: QuestionPage},
    
    { path: '/jobs', component: JobPage },
    { path: '/user/:userId', component: ProfilePage },
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage }
];

export { publicRoutes };
