import { AuthenticationError } from "apollo-server-express";
import { User, Book } from "../models/index.js";
import { GraphQLError } from "graphql";

const resolvers = {
  Query: {
    me: async (_, args, context) => {
      console.log(context.user);
      const user = await User.findOne({ _id: context.user._id });
      return user;
    },
    review: async (_, { bookId }, context) => {
      const bookReview = await Book.findOne({ _id: bookId });
      return bookReview;
    },
    reviews: async (_, args, context) => {
      const bookReviews = await Book.find();
      return bookReviews;
    },
  },

  Mutation: {
    signUp: async (_, { username, email, password }, context) => {
      const user = await User.create({ username, email, password });
      return user;
    },
    newReview: async (_, { title, author, review, authorLinks, photoUrl }) => {
      const bookReview = await Book.create({
        title,
        author,
        review,
        authorLinks,
        photoUrl,
      });
      return bookReview;
    },
    updateReview: async (
      _,
      { bookId, title, author, review, authorLinks, photoUrl }
    ) => {
      const bookReview = await Book.findByIdAndUpdate(
        bookId,
        { title, author, review, authorLinks, photoUrl },
        { new: true }
      );
      return bookReview;
    },
  },
};

export default resolvers;
