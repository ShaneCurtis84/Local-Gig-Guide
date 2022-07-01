//Import Express
const express = require('express');
// Import the ApolloServer class
const { ApolloServer } = require('apollo-server-express');
// Import GraphQL schema
const { typeDefs, resolvers } = require('./schemas');
//Import db connection
const db = require('./config/connection');
 // Import function for authenticated routes
const { authMiddleware } = require('./utils/auth');




// Sets an initial port.
const PORT = process.env.PORT || 3001;
// Tells node that we are creating an "express" server
const app = express();

// Create a new instance of an Apollo server with the GraphQL schema
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

// Update Express.js to use Apollo server features
server.applyMiddleware({ app });

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


 //Listener
 db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    // log where we can go to test our GQL API
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
  


