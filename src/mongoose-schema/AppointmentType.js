const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointmentTypeSchema = new Schema({
  type: { type: String, required: true },
});

module.exports = mongoose.model('AppointmentType', appointmentTypeSchema);