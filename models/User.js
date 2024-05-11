const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  date_of_birth: Date,
  isAdmin: Boolean
});

module.exports = mongoose.model('User', UserSchema);
