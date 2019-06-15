const Appointment = require('../mongoose-schema/Appointment');
const isAuthenticated = require('../authentication/auth');

module.exports = {
  addAppointment: async (_, args, context) => {
    try {
      isAuthenticated(context);
      const appointment = new Appointment(args);
      await appointment.save();
      return true;
    } catch (err) {
      console.log(err);
      return err;
    }
  },
};