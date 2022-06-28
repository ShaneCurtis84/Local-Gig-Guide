//Import Express
const express = require('express');

// Sets an initial port.
const PORT = process.env.PORT || 3001;

// Tells node that we are creating an "express" server
const app = express();



// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


 //Listener
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    
    });
  


