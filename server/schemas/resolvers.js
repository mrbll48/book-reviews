import { AuthenticationError } from "apollo-server-express";
import User from "../models/index.js";
import { GraphQLError } from "graphql";

const resolvers = {
  Query: {
    me: async (_, args, context) => {
      console.log(context.user);
      const user = await User.findOne({ _id: context.user._id });
      return user;
    },
  },

  Mutation: {
    signUp: async (_, { username, email, password }, context) => {
      const user = await User.create({ username, email, password });
      return user;
    },
  },
};

export default resolvers;
