import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_GIG = gql`
  mutation addGig(
    $tourName: String!
    $eventDate: String!
    $eventTime: String!
    $venue: String!
    $description: String!
    $links: String!
    $image: String!
  ) {
    addGig(
      tourName: $tourName
      eventDate: $eventDate
      eventTime: $eventTime
      venue: $venue
      description: $description
      links: $links
      image: $image
    ) {
      _id
      tourName
      eventDate
      eventTime
      venue
      description
      links
      image
    }
  }
`;
export const DELETE_GIG = gql`
  mutation deleteGig($gigId: ID!) {
    deleteGig(gigId: $gigId) {
      _id
    }
  }
`;

export const EDIT_TOUR_NAME = gql`
  mutation editTourName($gigId: ID!, $tourName: String!) {
    editTourName(gigId: $gigId, tourName: $tourName) {
      _id
      tourName
      eventDate
      eventTime
      venue
      description
      links
      image
    }
  }
`;
export const EDIT_EVENT_DATE = gql`
  mutation editEventDate($gigId: ID!, $eventDate: String!) {
    editEventDate(gigId: $gigId, eventDate: $eventDate) {
      _id
      tourName
      eventDate
      eventTime
      venue
      description
      links
      image
    }
  }
`;
export const EDIT_EVENT_TIME = gql`
  mutation editEventTime($gigId: ID!, $eventTime: String!) {
    editEventTime(gigId: $gigId, eventTime: $eventTime) {
      _id
      tourName
      eventDate
      eventTime
      venue
      description
      links
      image
    }
  }
`;
export const EDIT_VENUE = gql`
  mutation editVenue($gigId: ID!, $venue: String!) {
    editVenue(gigId: $gigId, venue: $venue) {
      _id
      tourName
      eventDate
      eventTime
      venue
      description
      links
      image
    }
  }
`;
export const EDIT_DESCRIPTION = gql`
  mutation editDescription($gigId: ID!, $description: String!) {
    editDescription(gigId: $gigId, description: $description) {
      _id
      tourName
      eventDate
      eventTime
      venue
      description
      links
      image
    }
  }
`;
export const EDIT_LINKS = gql`
  mutation editLinks($gigId: ID!, $links: String!) {
    editLinks(gigId: $gigId, links: $links) {
      _id
      tourName
      eventDate
      eventTime
      venue
      description
      links
      image
    }
  }
`;
export const EDIT_IMAGE = gql`
  mutation editImage($gigId: ID!, $image: String!) {
    editImage(gigId: $gigId, image: $image) {
      _id
      tourName
      eventDate
      eventTime
      venue
      description
      links
      image
    }
  }
`;
