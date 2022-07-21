import { gql } from "@apollo/client";

export const GET_ME = gql`
  query me {
    me {
      _id
      username
      email
     
    }
  }
`;

export const ALL_GIGS = gql`
query gigs {
  gigs{
  _id  
  tourName
  eventDate
  eventTime
  venue
  description
  links
  image
  }
}`;


