import React, { Fragment } from "react";
import { useParams } from "react-router";
import { useQuery, useMutation } from "@apollo/client";
import { ONE_GIG } from "../utils/queries";
import { DELETE_GIG } from "../utils/mutations";

const DeleteGig = () => {
  let { id } = useParams();
  const gigId = id;
  const { data, loading, error } = useQuery(ONE_GIG, {
    variables: { gigId: gigId },
  });

  const [deleteGig, { data: removeData, error: removeError }] =
    useMutation(DELETE_GIG);

  const deleteThisGig = async (event) => {
    event.preventDefault();
    deleteGig({ variables: { gigId: gigId } });

    window.location.href = "/edit";
  };

  return (
    <main>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Fragment>
          <div>
            <div>
              {error && <div>{error.message}</div>}
              {removeError && <div>{removeError.message}</div>}

              <p>
                Are you sure you want to delete this gig?
                <button id="delete-button" onClick={deleteThisGig}>
                  Delete
                </button>
              </p>
            </div>
          </div>
          <br />
        </Fragment>
      )}
      <br />
    </main>
  );
};

export default DeleteGig;
