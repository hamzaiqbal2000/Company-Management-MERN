const departments = require('../routes/departments');
const teams = require('../routes/teams');
const users = require('../routes/users');
const express = require('express');



module.exports = function (app){
    app.use(express.json());
    app.use('/api/departments', departments);
    app.use('/api/teams', teams);
    app.use('/api/users', users);
}