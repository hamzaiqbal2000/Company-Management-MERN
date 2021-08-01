const winston = require('winston');
const mongoose = require('mongoose');

module.exports = function () {
    mongoose
        .connect('mongodb://localhost/company')
        .then(() => winston.info("Connected to Mongodb..."))
}