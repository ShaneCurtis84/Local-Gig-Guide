import React, { Fragment, useState } from "react";
import { useParams } from "react-router";
import { useQuery, useMutation } from "@apollo/client";
import { ONE_GIG } from "../utils/queries";
import {
  EDIT_TOUR_NAME,
  EDIT_EVENT_DATE,
  EDIT_EVENT_TIME,
  EDIT_VENUE,
  EDIT_DESCRIPTION,
  EDIT_LINKS,
  EDIT_IMAGE,
} from "../utils/mutations";
import "./editgig.css";

const EditGig = () => {
  let { id } = useParams();
  const gigId = id;
  const { data, loading, error } = useQuery(ONE_GIG, {
    variables: { gigId: gigId },
  });

  const [tourName, setTourName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [venue, setVenue] = useState("");
  const [description, setDescription] = useState("");
  const [links, setLinks] = useState("");
  const [image, setImage] = useState("");

  const [editTourName, { data: tourNameData }] = useMutation(EDIT_TOUR_NAME);
  const [editEventDate, { data: eventDateData }] = useMutation(EDIT_EVENT_DATE);
  const [editEventTime, { data: eventTimeData }] = useMutation(EDIT_EVENT_TIME);
  const [editVenue, { data: venueData }] = useMutation(EDIT_VENUE);
  const [editDescription, { data: descriptionData }] =
    useMutation(EDIT_DESCRIPTION);
  const [editLinks, { data: linksData }] = useMutation(EDIT_LINKS);
  const [editImage, { data: imageData }] = useMutation(EDIT_IMAGE);

  const editFormTourName = async (event) => {
    event.preventDefault();
    editTourName({ variables: { gigId: gigId, tourName: tourName } });
    window.location.href = "/edit";
  };

  const editFormEventDate = async (event) => {
    event.preventDefault();
    editEventDate({ variables: { gigId: gigId, eventDate: eventDate } });
    window.location.href = "/edit";
  };
  const editFormEventTime = async (event) => {
    event.preventDefault();
    editEventTime({ variables: { gigId: gigId, eventTime: eventTime } });
    window.location.href = "/edit";
  };
  const editFormVenue = async (event) => {
    event.preventDefault();
    editVenue({ variables: { gigId: gigId, venue: venue } });
    window.location.href = "/edit";
  };
  const editFormDescription = async (event) => {
    event.preventDefault();
    editDescription({ variables: { gigId: gigId, description: description } });
    window.location.href = "/edit";
  };
  const editFormLinks = async (event) => {
    event.preventDefault();
    editLinks({ variables: { gigId: gigId, links: links } });
    window.location.href = "/edit";
  };
  const editFormImage = async (event) => {
    event.preventDefault();
    editImage({ variables: { gigId: gigId, image: image } });
    window.location.href = "/edit";
  };

  const handleInputChange = (event) => {
    let target = event.target;
    let inputType = target.name;
    let inputValue = target.value;

    if (inputType === "tourName") {
      setTourName(inputValue);
    } else if (inputType === "eventDate") {
      setEventDate(inputValue);
    } else if (inputType === "eventTime") {
      setEventTime(inputValue);
    } else if (inputType === "venue") {
      setVenue(inputValue);
    } else if (inputType === "description") {
      setDescription(inputValue);
    } else if (inputType === "links") {
      setLinks(inputValue);
    } else if (inputType === "image") {
      setImage(inputValue);
    }
  };

  return (
    <main>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Fragment>
          <div className="editformDiv">
            <form>
              <label>EditGig</label>

              <input
                className="edit-input"
                value={tourName}
                name="tourName"
                onChange={handleInputChange}
                type="text"
                placeholder="Enter a new Tour Name"
              />
              <button className="editbutton" onClick={editFormTourName}>
                Update
              </button>
              {tourNameData && <div>Tourname updated!</div>}

              <input
                className="edit-input"
                value={eventDate}
                name="eventDate"
                onChange={handleInputChange}
                type="text"
                placeholder="Enter Event Date"
              />
              <button className="editbutton" onClick={editFormEventDate}>
                Update
              </button>
              {eventDateData && <div>Event Date Updated</div>}

              <input
                className="edit-input"
                value={eventTime}
                name="eventTime"
                onChange={handleInputChange}
                type="text"
                placeholder="Enter Event Time"
              />
              <button className="editbutton" onClick={editFormEventTime}>
                Update
              </button>
              {eventTimeData && <div>Event Time Updated</div>}

              <input
                className="edit-input"
                value={venue}
                name="venue"
                onChange={handleInputChange}
                type="text"
                placeholder="Enter Venue Name"
              />
              <button className="editbutton" onClick={editFormVenue}>
                Update
              </button>
              {venueData && <div>Venue Updated</div>}

              <input
                className="edit-input"
                value={description}
                name="description"
                onChange={handleInputChange}
                type="text"
                placeholder="Enter Event Description"
              />
              <button className="editbutton" onClick={editFormDescription}>
                Update
              </button>
              {descriptionData && (
                <div>The data has been succesfully updated</div>
              )}

              <input
                className="edit-input"
                value={links}
                name="links"
                onChange={handleInputChange}
                type="text"
                placeholder="Enter Link"
              />
              <button className="editbutton" onClick={editFormLinks}>
                Update
              </button>
              {linksData && <div>The data has been succesfully updated!</div>}

              <input
                className="edit-input"
                value={image}
                name="image"
                onChange={handleInputChange}
                type="text"
                placeholder="Enter A Link For Image "
              />
              <button className="editbutton" onClick={editFormImage}>
                Update
              </button>
              {imageData && <div>The data has been succesfully updated!</div>}
            </form>
          </div>
        </Fragment>
      )}
    </main>
  );
};

export default EditGig;
