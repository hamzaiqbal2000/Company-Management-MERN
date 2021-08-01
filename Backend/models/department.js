const { teamSchema } = require('./team');
const { userSchema } = require('./user')
const Joi = require('joi');
const mongoose = require('mongoose');


const departmentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 50,
    },
    teams: [
        {
            type: teamSchema,
            required: true
        }
    ],
    inCharge: {
        type: userSchema,
        required: true
    }
});


const Department = mongoose.model('Department', departmentSchema);

function validateDepartment(department){
    const schema = {
        name: Joi.String().min(8).max(50).required(),
        teamsId: Joi.ObjectId().required(),
        inChargeId: Joi.ObjectId().required(),
    }

    return Joi.validate(department, schema);
}

exports.Department = Department;
exports.validate = validateDepartment;
