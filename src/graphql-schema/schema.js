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
  type Token {
    token: String
  }
  type Query {
    login(email: String!, password: String!): Token
    getUser: User
  }
`;