const Joi = require('joi');
const { userSchema } = require('./user')
const mongoose = require('mongoose');

//model
const teamSchema = mongoose.Schema({
    people:[
        {
            type: userSchema,
            required: true
        }
      ],
    teamLead:{
        type: userSchema,
        required: true
    }
})

const Team = mongoose.model('Team', teamSchema);

function validateTeam(team){
    const schema = {
        peopleId: Joi.ObjectId().required(),
        teamLeadId: Joi.ObjectId().required(), 
    }
    return Joi.validate(team, schema);
}

exports.Team = Team;
exports.validate = validateTeam;
exports.teamSchema = teamSchema;