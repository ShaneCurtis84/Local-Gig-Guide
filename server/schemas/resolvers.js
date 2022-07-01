const { AuthenticationError } = require("apollo-server-express");
const { User, Gig } = require("../models");



const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id });
        return userData;
      }
      throw new AuthenticationError("Cannot find a user with this id!");
    },
  },


  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      
      if (!user) {
          throw new AuthenticationError('Something is wrong!')
      } 
 
      return { user };
    },

    addGig: async (parent, {tourName,eventDate,eventTime,venue,description,links,city}) => {

       const gig = await Gig.create({tourName,eventDate,eventTime,venue,description,links,city});

       return { gig };
    
    }



  
  },
};



module.exports = resolvers;
