import React from 'react';
import "./giglist.css";




const Giglist = ({gigs}) => {
    return (
      
                <div className='row'>
        {gigs &&
            gigs.map((gig) => (
                <div className='card-01' key={gig._id}>
                  
                    <div className='card-header'>
                    <h3> {gig.tourName}</h3>
                    <p> {gig.eventDate}!</p>
                    </div>
                    <div className='card-body' >
                    <img src={gig.image} alt='gigs' className='project-image'></img>
                    <p>{gig.description}</p>
                   </div>
                   <div className='card-footer'>
                   <p>{gig.eventTime}</p>
                    <p>{gig.venue}</p>
                    </div>
                   
                
                </div>
            ))}
          


    </div>
    );
};

export default Giglist;