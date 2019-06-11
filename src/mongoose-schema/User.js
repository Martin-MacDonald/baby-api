const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  name: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  password: { type: String, required: true },
  email: { type: String, required: true },
  parentType: { type: String, required: true },
});

userSchema.pre('save', async function(next) {
  const user = this;
  if (!user.isModified('password')) return next();
  try {
    const hash = await bcrypt.hash(user.password, 12);
    user.password = hash;
    next();
  } catch(err) {
    return next(err);
  }
});

userSchema.methods.comparePassword = async function(password) {
  try {
    const isMatch = await bcrypt.compare(password, this.password);
    return isMatch;
  } catch(err) {
    return err;
  }
};

module.exports = mongoose.model('User', userSchema);
