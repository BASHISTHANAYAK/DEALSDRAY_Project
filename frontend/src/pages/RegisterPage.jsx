import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  console.log("backend url-", import.meta.env.VITE_BACKEND_BASE_URL);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_BASE_URL}/register`, {
        username,
        password,
      });
      alert("Admin successfully registred");
      navigate("/login");
    } catch (error) {
      console.error("Error registering", error);
      if (error.response.data.message) {
        alert(error.response.data.message);
      } else {
        alert(error.message);
      }
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterPage;
