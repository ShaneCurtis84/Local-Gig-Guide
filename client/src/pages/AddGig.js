

import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_GIG } from "../utils/mutations";




const AddGig = () => {


 
    
    const [userFormData, setUserFormData] = useState({
      tourName: "",
      eventDate: "",
      eventTime: "",
      venue: "",
      description: "",
      links: "",
      image: "",
    });
  
    const [addGig, { error }] = useMutation(ADD_GIG);
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setUserFormData({ ...userFormData, [name]: value });
    };
  
   
    const handleFormSubmit = async (event) => {
      event.preventDefault();
  
      try {
        await addGig ({ variables: { ...userFormData } });
  
        
      if(error) {
       throw new Error("Something went wrong!");
      }
      } catch (error) {
        console.error(error.message);
        
      }
      setUserFormData({
        tourName: "",
        eventDate: "",
        eventTime: "",
        venue: "",
        description: "",
        links: "",
        image: "",
     });
    };

    
      
    return (


   
      
        <main>

          <div className="formDiv">
              <div className="addgig">
              {error && <div>{error.message}</div>}
              <form>
                  
              <label>AddGig</label>
                      <input
                          
                          placeholder='Enter the Event or Tour name'
                          name='tourName'
                          type='text'
                          value={userFormData.tourName}
                          onChange={handleInputChange}
                          required=""
                      />
                
                
                      
                      <input
                          
                          placeholder='Enter date of the event'
                          name='eventDate'
                          type='text'
                          value={userFormData.eventDate}
                          onChange={handleInputChange}
                          required=""
                      />

                          <input
                          
                          placeholder='Enter time of the event'
                          name='eventTime'
                          type='text'
                          value={userFormData.eventTime}
                          onChange={handleInputChange}
                          required=""
                      />
                         <input
                          
                          placeholder='Venue name'
                          name='venue'
                          type='text'
                          value={userFormData.venue}
                          onChange={handleInputChange}
                          required=""
                      />
                
                
                
                      <input
                          
                          placeholder='Enter a description of the event'
                          name='description'
                          type='text'
                          value={userFormData.description}
                          onChange={handleInputChange}
                          required=""
                      />

                           <input
                          
                          placeholder='Add a link to band or ticket information'
                          name='links'
                          type='text'
                          value={userFormData.links}
                          onChange={handleInputChange}
                          required=""
                      />
                           <input
                          
                          placeholder='Enter a linked Image'
                          name='image'
                          type='text'
                          value={userFormData.image}
                          onChange={handleInputChange}
                          required=""
                      />
                
                  <button id='login-button' onClick={handleFormSubmit}>Submit</button>
              </form>
          </div>
          </div>
 </main>
     
   
  );


      

    
   
    }      
   
;



export default AddGig;