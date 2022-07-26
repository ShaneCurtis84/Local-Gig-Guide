import React, { Fragment } from 'react';
import { useQuery } from "@apollo/client";
import { ALL_GIGS } from "../utils/queries";
import Editlist from "../components/Editlist";
import "./editgigs.css"



const EditGigs = () => {



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

            <div className='container'>
            <div className='main'>
             
          
                <Editlist gigs={data.gigs} />
                
                </div>

                </div>
          
        </Fragment>
    );


        
  };
  
  export default EditGigs;