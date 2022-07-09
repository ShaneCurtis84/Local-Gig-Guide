import React, { useState } from "react";
import Auth from "../utils/auth";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";



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
      <div>

<div>
                <div>Signup</div>
                {error && <div>{error.message}</div>}
                <form>
                    <div>
                        <label>Create a Username</label>
                        <input
                            
                            placeholder='username'
                            name='username'
                            type='text'
                            value={userFormData.username}
                            onChange={handleInputChange}
                        />
                    </div>
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
                        <label>Create a Password</label>
                        <input
                            
                            placeholder='password'
                            name='password'
                            type='password'
                            value={userFormData.password}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button id='signup-button' onClick={handleFormSubmit}>Submit</button>
                </form>
            </div>
       
      </div>
    );
  };
  
  export default Signup;