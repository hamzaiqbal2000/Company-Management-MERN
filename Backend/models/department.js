const { teamSchema } = require("./team");
const { userSchema } = require("./user");
const Joi = require("joi");
const mongoose = require("mongoose");

const departmentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 50,
  },
  teams: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "team",
    },
  ],
  inCharge: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

const Department = mongoose.model("department", departmentSchema);

function validateDepartment(department) {
  const schema = {
    name: Joi.string().min(4).max(50),
    teamsId: Joi.array().items(Joi.objectId()),
    inChargeId: Joi.objectId(),
  };

  return Joi.validate(department, schema);
}

exports.Department = Department;
exports.validate = validateDepartment;
