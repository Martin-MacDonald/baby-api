const { gql } = require('apollo-server');

module.exports = gql`
  type Name {
    firstName: String
    lastName: String
  }
  type User {
    id: ID
    name: Name
    email: String
    parentType: String
  }
  type LoginRes {
    token: String
    user: User
  }
  type Query {
    login(email: String!, password: String!): LoginRes
    checkLogin: Boolean
    getUser: User
  }
`;