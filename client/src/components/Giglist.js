import React from 'react';
import "./giglist.css";




const Giglist = ({gigs}) => {
    return (
      
       
        <div className="card-row">
        {gigs &&
            gigs.map((gig) => (
               
                  <div className='card' key={gig._id}>
                   <img src={gig.image} alt='gigs'></img>
                    <div className='card_content'>
                    <h3 className='card_title'>{gig.tourName}</h3>
                    <p>Date: {gig.eventDate}</p>
                    <p>Time: {gig.eventTime}</p>
                    <p>Venue: {gig.venue}</p>
                    <p className="card_text">{gig.description}</p>
                    <button className="btn card_btn"><a href={gig.links}target="_blank" rel="noopener noreferrer">More Info</a></button>
  
                    </div>
                    
                    </div>
                                 
                  
                
               
            ))}
          
       
          </div>
          
    );

   
};

export default Giglist;