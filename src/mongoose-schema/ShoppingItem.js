const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shoppingItemSchema = new Schema({
  shoppingItem: { type: String, required: true },
  bought: { type: Boolean, required: true, default: false }
});

module.exports = mongoose.model('ShoppingItem', shoppingItemSchema);
