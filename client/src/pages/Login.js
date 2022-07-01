import React, { useState } from "react";
import Auth from "../utils/auth";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../utils/mutations";



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
     } catch (error) {
      console.error(error.message);
      
    }
    setUserFormData({
      email: "",
      password: "",
    });
  };






    return (
      <div>
      
      <div>
                <div>Login</div>
                {error && <div>{error.message}</div>}
                <form>
                    <div>
                        <label>Enter Your Email</label>
                        <input
                            
                            placeholder='email'
                            name='email'
                            type='email'
                            value={userFormData.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label>Enter Your Password</label>
                        <input
                            
                            placeholder='password'
                            name='password'
                            type='password'
                            value={userFormData.password}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button id='login-button' onClick={handleFormSubmit}>Submit</button>
                </form>
            </div>

       
      </div>
    );
  };
  
  export default Login;