import { gql } from "apollo-server-express";

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    password: String!
    email: String!
  }

  type Query {
    me: User
  }

  type Mutation {
    signUp(username: String!, email: String!, password: String!): User
  }
`;

export default typeDefs;
