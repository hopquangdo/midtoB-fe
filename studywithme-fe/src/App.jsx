import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import MainLayout from "./layouts/main/MainLayout";
import { publicRoutes } from "./routes/Routes";
import "./index.css";
function App() {
  return (
    <Router>
      <Routes> 
        {publicRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<MainLayout><route.component /></MainLayout>} />
          ))} 
      </Routes> 
    </Router>
  )
}

export default App
