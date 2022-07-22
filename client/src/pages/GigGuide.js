
import React, { Fragment } from 'react';
import { useQuery } from "@apollo/client";
import { ALL_GIGS } from "../utils/queries";
import Giglist from "../components/Giglist";





const GigGuide = () => {
  const { loading, error, data } = useQuery(ALL_GIGS)
  if (loading) {
      return (
          <Fragment>
              <div id='loading-text'>Loading...</div><br />
          </Fragment>)
  }
  if (error) {
      console.error(error.message)
      return (
          <Fragment>
              <div id='loading-text'>{error.message}</div>
          </Fragment>
      )
  }
  return (
      <Fragment>
          <div className='main'>
           
        
              <Giglist gigs={data.gigs} />
              
              </div>
        
      </Fragment>
  );













    
  };
  
  export default GigGuide;