const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  id: {type: Number, required: true},
  username: {type: String, required: true},
  password: {type: String, required: true},
  age: {type: Number},
  weight: {type: Number},
  height: {type: Number},
  goals: {type: String}
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
