import React from "react";
import { Link } from "react-router-dom";

import "./giglist.css";

const Editlist = ({ gigs }) => {
  return (
    <div className="card-row">
      {gigs &&
        gigs.map((gig) => (
          <div className="card" key={gig._id}>
            <img src={gig.image} alt="gigs"></img>
            <div className="card_content">
              <h3 className="card_title">{gig.tourName}</h3>
              <p>Date: {gig.eventDate}</p>
              <p>Time: {gig.eventTime}</p>
              <p>Venue: {gig.venue}</p>
              <p className="card_text">{gig.description}</p>
              <button className="btn card_btn">
                {" "}
                <Link className="linkText" to={`/delete/${gig._id}`}>
                  Delete Gig
                </Link>
              </button>
              <button className="btn card_btn">
                {" "}
                <Link className="linkText" to={`/edit/${gig._id}`}>
                  Edit Gig
                </Link>
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Editlist;
