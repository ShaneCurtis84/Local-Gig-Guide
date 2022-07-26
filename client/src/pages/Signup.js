import React, { useState } from "react";
import Auth from "../utils/auth";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import "./signup.css";

const Signup = () => {
  const [userFormData, setUserFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [addUser, { error }] = useMutation(ADD_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({ variables: { ...userFormData } });

      Auth.login(data.addUser.token);
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
    <main>
      <div className="formDiv">
        <div className="signup">
          {error && <div>{error.message}</div>}
          <form>
            <label>Sign up</label>

            <input
              placeholder="Please enter a username"
              name="username"
              type="text"
              value={userFormData.username}
              onChange={handleInputChange}
              required=""
            />

            <input
              placeholder="Please enter your email address"
              name="email"
              type="email"
              value={userFormData.email}
              onChange={handleInputChange}
              required=""
            />

            <input
              placeholder="Please enter a password"
              name="password"
              type="password"
              value={userFormData.password}
              onChange={handleInputChange}
              required=""
            />

            <button id="signup-button" onClick={handleFormSubmit}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Signup;
