import { gql } from "apollo-server-express";

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    password: String!
    email: String!
  }

  type Book {
    _id: ID
    title: String!
    author: String!
    review: String!
    authorLinks: String
    photoUrl: String
  }

  type Query {
    me: User
    review(bookId: String): Book
    reviews: [Book]
  }

  type Mutation {
    newReview(
      title: String!
      author: String!
      review: String!
      authorLinks: String
      photoUrl: String
    ): Book
    updateReview(
      bookId: String
      title: String
      author: String
      review: String
      authorLinks: String
      photoUrl: String
    ): Book
    signUp(username: String!, email: String!, password: String!): User
  }
`;

export default typeDefs;
