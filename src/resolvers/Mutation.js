const Appointment = require('../mongoose-schema/Appointment');
const BabyName = require('../mongoose-schema/BabyName');
const ShoppingItem = require('../mongoose-schema/ShoppingItem');
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
  addName: async (_, args, context) => {
    try {
      isAuthenticated(context);
      const name = new BabyName(args);
      await name.save();
      return true;
    } catch (err) {
      console.log(err);
      return err;
    }
  },
  addShoppingItem: async (_, args, context) => {
    try {
      isAuthenticated(context);
      const shoppingItem = new ShoppingItem(args);
      await shoppingItem.save();
      return true;
    } catch (err) {
      console.log(err);
      return err;
    }
  },
};