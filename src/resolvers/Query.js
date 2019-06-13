const User = require('../mongoose-schema/User');
const jwt = require('jsonwebtoken');
const isAuthenticated = require('../authentication/auth');

module.exports = {
  login: async (_, args) => {
    try {
      const { email, password } = args;
      const user = await User.findOne({ email }).exec();
      if (!user) throw new Error('user sign-in credentials not valid');
      const isMatch = await user.comparePassword(password);
      if (!isMatch) throw new Error('user sign-in credentials not valid');
      const token = jwt.sign({ id: user.id }, process.env.NODE_JWT_SECRET);
      return { token };
    } catch (err) {
      console.log(err);
      return err;
    }
  },
  checkLogin: (_, args, context) => {
    try {
      isAuthenticated(context);
      return true;
    } catch (err) {
      return false;
    }
  },
  getUser: async (_, args, context) => {
    try {
      isAuthenticated(context);
      const { user } = context;
      const currentUser = await User.findById(user.id).exec();
      return currentUser;
    } catch (err) {
      console.log(err);
      return err;
    }
  },
};