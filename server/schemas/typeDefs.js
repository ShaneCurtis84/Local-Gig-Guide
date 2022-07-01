const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
    _id: ID
    username: String!
    email: String!
    password: String!
   
        
  }



  type Query {
    me: User
  }


  type Gig {
  _id: ID
  tourName:String!
  eventDate:String!
  eventTime:String!
  venue:String!
  description:String!
  links:String!
  city:String!
  



  }
  

  type Mutation {
    addUser(username: String!, email: String!, password: String!): User
    addGig(tourName: String!, eventDate:String!, eventTime:String!, venue:String!, description:String!, links:String!, city:String!): Gig
  
  }


`;

module.exports = typeDefs;