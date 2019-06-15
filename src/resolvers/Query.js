const User = require('../mongoose-schema/User');
const Appointment = require('../mongoose-schema/Appointment');
const AppointmentType = require('../mongoose-schema/AppointmentType');
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
      return { token, user };
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
  getAppointments: async (_, args, context) => {
    try {
      isAuthenticated(context);
      const appointments = await Appointment.find({}).exec();
      return appointments;
    } catch (err) {
      console.log(err);
      return err;
    }
  },
  getAppointmentTypes: async (_, args, context) => {
    try {
      isAuthenticated(context);
      const appointmentTypes = await AppointmentType.find({}).exec();
      return appointmentTypes;
    } catch (err) {
      console.log(err);
      return err;
    }
  },
};