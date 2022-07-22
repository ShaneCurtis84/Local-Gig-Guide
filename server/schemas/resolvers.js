const { AuthenticationError } = require("apollo-server-express");
const { User, Gig } = require("../models");
const { signToken } = require('../utils/auth');



const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id });
        return userData;
      }
      throw new AuthenticationError('Cannot find a user with this id!');
    },
    gigs: async () => {
      return await Gig.find({})
     }
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      
      if (!user) {
          throw new AuthenticationError('Something is wrong!')
      } 
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Wrong password');
      }

      const token = signToken(user);

      return { token, user };
    },

    addGig: async (_, {tourName,eventDate,eventTime,venue,description,links,image}) => {

      return Gig.create({tourName,eventDate,eventTime,venue,description,links,image});

    
    
    },



  
  },
};



module.exports = resolvers;
