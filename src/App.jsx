import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeLayout from "./layouts/home/HomeLayout";
import { publicRoutes } from "./routes/Routes";
import { ToastContainer } from 'react-toastify';
import { WebProvider } from "./context/WebContext";
import "./index.css";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <WebProvider>
      <Router>
        <ToastContainer />
        <Routes>
          {publicRoutes.map((route, index) => {
            const Layout = route.layout || HomeLayout; 
            return (
              <Route key={index}
                path={route.path}
                element={<Layout><route.component /></Layout>} 
              />
            );
          })}
        </Routes>
      </Router>
    </WebProvider>
  );
}


export default App;
