const { Schema, model } = require("mongoose");

const gigSchema = new Schema({

  tourName: {
  type: String,
  },
  eventDate: {
    type: String,
  },
  eventTime: {
    type: String,
  },
  venue: {
    type: String,
  },
  description: {
    type: String,
  },
  links: {
    type: String,
  },
  image: {
    type: String,
  },
});

const Gig = model("Gig", gigSchema);

module.exports = Gig;
