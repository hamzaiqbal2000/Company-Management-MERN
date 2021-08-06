const Joi = require("joi");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 50,
  },
});

const User = mongoose.model("user", userSchema);

function validateUser(user) {
  const schema = {
    name: Joi.string().min(4).max(50).required(),
  };

  return Joi.validate(user, schema);
}

exports.User = User;
exports.validate = validateUser;
exports.userSchema = userSchema;
