import HomePage from "../pages/home/HomePage";

import {StudyHomePage,CoursePage,QuestionPage,SearchFilePage} from "../pages/study-page/index";

import JobPage from "../pages/job/JobPage";
import LoginPage from "../pages/auth/login/LoginPage";
import RegisterPage from "../pages/auth/register/RegisterPage";
import ProfilePage from "../pages/profile/Profile";
import ChatPage from "../pages/chat/ChatPage";
import AskPage from "../pages/study-page/ask/AskPage";
import StudyLayout from "../layouts/study/StudyLayout";
import QuestionDetailPage from "../pages/study-page/question/QuestionDetailPage";
import HomeLayout from "../layouts/home/HomeLayout";
const publicRoutes = [
    { path: '/home', component: HomePage,layout: HomeLayout },
    { path: '/', component: HomePage,layout: HomeLayout  },
    { path: '/chat', component: ChatPage,layout: HomeLayout },
    
    { path: '/study', component: StudyHomePage,layout: StudyLayout  },
    { path: '/study/course', component: CoursePage,layout: StudyLayout },
    { path: '/study/file', component: SearchFilePage,layout: StudyLayout  },
    {path: '/study/questions',component: QuestionPage,layout: StudyLayout },
    {path: '/study/questions/:questionId',component: QuestionDetailPage,layout: StudyLayout },
    { path: '/study/questions/ask', component: AskPage,layout: StudyLayout },
    
    { path: '/jobs', component: JobPage,layout: StudyLayout  },
    { path: '/user/:userId', component: ProfilePage,layout: StudyLayout  },
    { path: '/login', component: LoginPage,layout: null  },
    { path: '/register', component: RegisterPage,layout: null  }
];

export { publicRoutes };
