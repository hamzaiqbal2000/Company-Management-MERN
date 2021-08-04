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
      type: teamSchema,
      required: true,
    },
  ],
  inCharge: {
    type: userSchema,
    required: true,
  },
});

const Department = mongoose.model("Department", departmentSchema);

function validateDepartment(department) {
  const schema = {
    name: Joi.string().min(4).max(50).required(),
    teamsId: Joi.objectId().required(),
    inChargeId: Joi.objectId().required(),
  };

  return Joi.validate(department, schema);
}

exports.Department = Department;
exports.validate = validateDepartment;
