const Joi = require("joi");
const { userSchema } = require("./user");
const mongoose = require("mongoose");

//model
const teamSchema = mongoose.Schema({
  people: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],
  teamLead: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

const Team = mongoose.model("team", teamSchema);

function validateTeam(team) {
  const schema = {
    peopleId: Joi.array().items(Joi.objectId()),
    teamLeadId: Joi.objectId(),
  };
  return Joi.validate(team, schema);
}

exports.Team = Team;
exports.validate = validateTeam;
exports.teamSchema = teamSchema;
