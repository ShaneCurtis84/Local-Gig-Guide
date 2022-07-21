const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
    _id: ID
    username: String!
    email: String!
    
   }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  
  }
  

  type Query {
    gigs: [Gig]
  
  }





  type Gig {
  _id:ID
  tourName:String!
  eventDate:String!
  eventTime:String!
  venue:String!
  description:String!
  links:String!
  image:String!
  



  }
  

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addGig(tourName: String!, eventDate:String!, eventTime:String!, venue:String!, description:String!, links:String!, image:String!): Gig

  
  }


`;

module.exports = typeDefs;