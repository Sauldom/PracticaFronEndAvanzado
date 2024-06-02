const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
  email: String,
  password: String,
});

userSchema.statics.hashPassword = function (passShow) {
  return bcrypt.hash(passShow, 8);
};

userSchema.methods.comparePassword = function (passShow) {
  return bcrypt.compare(passShow, this.password);
};
const User = mongoose.model("User", userSchema);

module.exports = User;
