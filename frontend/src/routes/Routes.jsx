import HomePage from "../pages/home/HomePage";

import {StudyHomePage,CoursePage,QuestionPage,SearchFilePage} from "../pages/study-page/index";

import JobPage from "../pages/job/JobPage";
import LoginPage from "../pages/auth/login/LoginPage";
import RegisterPage from "../pages/auth/register/RegisterPage";
import ProfilePage from "../pages/profile/Profile";

const publicRoutes = [
    { path: '/home', component: HomePage },
    { path: '/', component: HomePage },

    { path: '/study', component: StudyHomePage },
    { path: '/study/course', component: CoursePage},
    { path: '/study/search-file', component: SearchFilePage },
    { path: '/study/questions', component: QuestionPage},
    
    { path: '/jobs', component: JobPage },
    { path: '/user/:userId', component: ProfilePage },
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage }
];

export { publicRoutes };
