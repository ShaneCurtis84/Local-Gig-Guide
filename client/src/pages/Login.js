import React, { useState } from "react";
import Auth from "../utils/auth";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../utils/mutations";
import "./login.css";

const Login = () => {
  const [userFormData, setUserFormData] = useState({
    email: "",
    password: "",
  });

  const [login, { error }] = useMutation(LOGIN);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({ variables: { ...userFormData } });

      Auth.login(data.login.token);
      if (error) {
        throw new Error("Something went wrong!");
      }
    } catch (error) {
      console.error(error.message);
    }
    setUserFormData({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="body-loginSignup">
      <main>
        <div className="formDiv">
          <div className="login">
            {error && <div>{error.message}</div>}
            <form>
              <label>Login</label>
              <input
                placeholder="Please enter your email"
                name="email"
                type="email"
                value={userFormData.email}
                onChange={handleInputChange}
                required=""
              />

              <input
                placeholder="Please enter your password"
                name="password"
                type="password"
                value={userFormData.password}
                onChange={handleInputChange}
                required=""
              />

              <button id="login-button" onClick={handleFormSubmit}>
                Login
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
