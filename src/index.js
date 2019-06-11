const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const typeDefs = require('./graphql-schema/schema');
const resolvers = require('./resolvers');

const uri = process.env.MONOGDB_URI || 'mongodb://localhost:27017/our_baby';
mongoose.connect(uri, { useNewUrlParser: true });

const getUser = (token) => {
  try {
    if (!token) return;
    const user = jwt.verify(token.split("Bearer ")[1], process.env.NODE_JWT_SECRET);
    return user;
  } catch (err) {
    console.log(err);
    return;
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const token = req.headers.authorization || '';
    const user = getUser(token);
    return { user };
  },
});

server
  .listen({ port: process.env.PORT || 4000 })
  .then(({ url }) => {
    console.log(`Server ready at ${url}`);
  });