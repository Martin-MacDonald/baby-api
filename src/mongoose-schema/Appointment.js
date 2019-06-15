const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  appointmentType: { type: Schema.Types.ObjectId, required: true },
  date: { type: Date, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
});

module.exports = mongoose.model('Appointment', appointmentSchema);
