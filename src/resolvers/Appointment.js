const AppointmentType = require('../mongoose-schema/AppointmentType');
const isAuthenticated = require('../authentication/auth');

module.exports = {
  appointmentType: async (parent, args, context) => {
    try {
      isAuthenticated(context);
      const { appointmentType } = parent;
      const type = await AppointmentType.findById(appointmentType).exec();
      return type;
    } catch (err) {
      console.log(err);
      return err;
    }
  },
};