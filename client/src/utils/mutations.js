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
mutation addGig($tourName:String!
  $eventDate:String!
  $eventTime:String!
  $venue:String!
  $description:String!
  $links:String!
  $image:String!) {
  addGig(tourName: $tourName, eventDate: $eventDate, eventTime: $eventTime, venue: $venue, description: $description, links: $links, image: $image) {
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
`