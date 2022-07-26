//Import Express
const express = require("express");

const path = require("path");
// Import the ApolloServer class
const { ApolloServer } = require("apollo-server-express");
// Import GraphQL schema
const { typeDefs, resolvers } = require("./schemas");
//Import db connection
const db = require("./config/connection");
// Import function for authenticated routes
const { authMiddleware } = require("./utils/auth");

// Create a new instance of an Apollo server with the GraphQL schema
async function startApolloServer() {
  // Tells node that we are creating an "express" server
  const app = express();
  // Sets an initial port.
  const PORT = process.env.PORT || 3001;
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    context: authMiddleware,
  });

  await server.start();

  // Update Express.js to use Apollo server features
  server.applyMiddleware({ app });

  // Sets up the Express app to handle data parsing
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  // if we're in production, serve client/build as static assets
  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/build")));
  }

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });

  //Listener

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      // log where we can go to test our GQL API
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
}

startApolloServer();
