//Import Express
const express = require('express');
// Import the ApolloServer class
const { ApolloServer } = require('apollo-server-express');
// Import GraphQL schema
const { typeDefs, resolvers } = require('./schemas');





// Sets an initial port.
const PORT = process.env.PORT || 3001;
// Tells node that we are creating an "express" server
const app = express();

// Create a new instance of an Apollo server with the GraphQL schema
const server = new ApolloServer({
  typeDefs,
  resolvers
});

// Update Express.js to use Apollo server features
server.applyMiddleware({ app });

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


 //Listener
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    
    });
  


