const Joi = require('joi');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 50,
    }
})

const User = mongoose.model('User', userSchema);

function validateUser(user){
    const schema= {
        name: Joi.String().min(8).max(50).required(),
    }

    return Joi.validate(user, schema);
}

exports.User = User;
exports.validate = validateUser;