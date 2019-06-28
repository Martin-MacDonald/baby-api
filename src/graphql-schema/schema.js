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
  type AppointmentType {
    id: ID
    type: String
  }
  type Appointment {
    id: ID
    appointmentType: AppointmentType
    date: String
    description: String
    location: String
  }
  type BabyName {
    id: ID
    name: String
  }
  type ShoppingItem {
    id: ID
    shoppingItem: String
    bought: Boolean
  }
  type Query {
    login(email: String!, password: String!): LoginRes
    checkLogin: Boolean
    getUser: User
    getAppointments: [Appointment]
    getAppointmentTypes: [AppointmentType]
    getNames: [BabyName]
    getShoppingItems: [ShoppingItem]
  }
  type Mutation {
    addAppointment(appointmentType: ID!, date: String!, description: String!, location: String!): Boolean
    addName(name: String!): Boolean
    addShoppingItem(shoppingItem: String!): Boolean
  }
`;