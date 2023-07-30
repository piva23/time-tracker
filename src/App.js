import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import CreateTaskPage from "./pages/CreateTask";
import Reports from "./components/Reports";
import PrivateRoute from "./components/PrivateRoute";
import Layout1 from './pages/Layout1/layout1';
import authProtectedRoutes from './routes/allRoutes';


function App() {
  return (

    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/index-1" element={<authProtectedRoutes.Layout1 />} />

        <Route path="/login" element={<Login />} />
        <Route path="/create-task" element={<CreateTaskPage />} />
        <Route
          path="/reports"
          element={
            <PrivateRoute>
              <Reports />
            </PrivateRoute>
          }
        />
      </Routes>
      {/* Footer */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
