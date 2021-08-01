const { validate, Team } = require('../models/team');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const teams = await Team.find();
    res.send(teams);
});

router.get('/:id', async (req, res) => {
    const team = await Team.findById(req.params.id);

    if(!team){
        return res.status(404).send("The team you are trying to access is not available");
    }

    res.send(team);

})

router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if(error){
        res.status(404).send(error.details[0].message);
    }

    const user = await User.findById(req.body.userId);
    if(!user) return res.status(400).send("Invalid genre...");

    const team = new Team({
        people:[{
            _id: user._id,
            name: user.name
        }],
        teamLead:{
            _id: user._id,
            name: user.name
        }
    })

    await team.save();
    res.send(team);
})

router.put('/:id', async (req, res) => {
    const { error } = validate(req.body);
    if(error){
        res.status(404).send(error.details[0].message);
    }

    const user = await User.findById(req.body.userId);
    if(!user) return res.status(400).send("Invalid genre...");

    let team = await Team.findByIdAndUpdate(
        req.params.id,
        {
            people:[{
                _id: user._id,
                name: user.name
            }],
            teamLead:{
                _id: user._id,
                name: user.name
            }
        }, {
            new: true
        }
    )
    res.send(team);
})

module.exports = router;