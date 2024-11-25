import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import EmployeePage from "./pages/EmployeePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import EditEmployeePage from "./pages/EditEmployeePage";
import { AuthProvider } from "./contexts/AuthContext";
import CreateEmployeePage from "./pages/CreateEmployeePage";
import LogOutPage from "./pages/LogOutPage";

const App = () => {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/employees" element={<EmployeePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/create-employee" element={<CreateEmployeePage />} />
        <Route path="/editEmployee/:id" element={<EditEmployeePage />} />
        <Route path="/logout" element={<LogOutPage />} />

        <Route path="*" element={<HomePage />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
