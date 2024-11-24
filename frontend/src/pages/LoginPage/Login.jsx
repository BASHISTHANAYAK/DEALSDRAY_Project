import axios from "axios";
import BASE_URL from "../../apiConfig";
import { useState } from "react";

const Login = () => {
  const [loginDetails, setLoginDetails] = useState({
    userName: "",
    password: "",
  });

  //enterLoginDetails
  function enterLoginDetails(e) {
    const { name, value } = e.target;
    setLoginDetails((pre) => ({ ...pre, [name]: value }));
  }

  //submitForm
  async function submitForm(e) {
    e.preventDefault();
    try {
      let res = await axios.post(`${BASE_URL}/login`, loginDetails);
      console.log("login res-", res);
    } catch (error) {
      console.log(error.message);
      // for empty input
      console.log(error.response.data.message);
    }
  }
  return (
    <div>
      <form onSubmit={submitForm}>
        <input
          type="text"
          placeholder="User Name"
          value={loginDetails.userName}
          name="userName"
          onInput={enterLoginDetails}
        />
        <br />
        <input
          type="text"
          placeholder="Password"
          value={loginDetails.password}
          name="password"
          onInput={enterLoginDetails}
        />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Login;
