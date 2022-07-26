const { AuthenticationError } = require("apollo-server-express");
const { User, Gig } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id });
        return userData;
      }
      throw new AuthenticationError("Cannot find a user with this id!");
    },
    gigs: async () => {
      return await Gig.find({});
    },
    gig: async (_, { gigId }) => {
      return await Gig.findById({ _id: gigId });
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });

      if (!user) {
        throw new AuthenticationError("Something is wrong!");
      }
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Wrong password");
      }

      const token = signToken(user);

      return { token, user };
    },

    addGig: async (
      _,
      { tourName, eventDate, eventTime, venue, description, links, image }
    ) => {
      return Gig.create({
        tourName,
        eventDate,
        eventTime,
        venue,
        description,
        links,
        image,
      });
    },
    deleteGig: async (_, { gigId }) => {
      return await Gig.findByIdAndDelete(gigId);
    },

    editTourName: async (_, { gigId, tourName }) => {
      return await Gig.findOneAndUpdate(
        { _id: gigId },
        { tourName },
        { new: true }
      );
    },
    editEventDate: async (_, { gigId, eventDate }) => {
      return await Gig.findOneAndUpdate(
        { _id: gigId },
        { eventDate },
        { new: true }
      );
    },
    editEventTime: async (_, { gigId, eventTime }) => {
      return await Gig.findOneAndUpdate(
        { _id: gigId },
        { eventTime },
        { new: true }
      );
    },
    editVenue: async (_, { gigId, venue }) => {
      return await Gig.findOneAndUpdate(
        { _id: gigId },
        { venue },
        { new: true }
      );
    },
    editDescription: async (_, { gigId, description }) => {
      return await Gig.findOneAndUpdate(
        { _id: gigId },
        { description },
        { new: true }
      );
    },
    editLinks: async (_, { gigId, links }) => {
      return await Gig.findOneAndUpdate(
        { _id: gigId },
        { links },
        { new: true }
      );
    },
    editImage: async (_, { gigId, image }) => {
      return await Gig.findOneAndUpdate(
        { _id: gigId },
        { image },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
