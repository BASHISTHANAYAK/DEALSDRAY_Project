import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwtDecode(token);
      setIsAuthenticated(true);
      setUser(decoded);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      setIsAuthenticated(false);
      navigate("/login");
    }
  }, []);

  // login
  const login = async (username, password) => {
    try {
      console.log(username, password);
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/login`,
        { username, password }
      );
      console.log(response);
      if (response) {
        const { token } = response.data;
        localStorage.setItem("token", token);
        const decoded = jwtDecode(token);
        setIsAuthenticated(true);
        setUser(decoded);
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        alert(response.data.message);
        navigate("/");
      }
    } catch (error) {
      console.error("Login failed", error);
      if (error.response.data.message) {
        alert(error.response.data.message);
      } else {
        alert(error.message);
      }
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setUser(null);
    delete axios.defaults.headers.common["Authorization"];
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
