import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import MainLayout from "./layouts/main/MainLayout";
import { publicRoutes } from "./routes/Routes";
import { ToastContainer } from 'react-toastify';
import "./index.css";
function App() {
  return (
    <Router>
      <div>
        <ToastContainer/>
        <Routes> 
          {publicRoutes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={<MainLayout><route.component /></MainLayout>} />
            ))} 
        </Routes> 
      </div>
    </Router>
  )
}

export default App
