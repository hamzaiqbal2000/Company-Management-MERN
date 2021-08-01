const { validate, Department } = require('../models/department');
const express = require('router');
const { User } = require('../models/user');
const router = express.Router();

router.get('/', async (req, res) => {
    const departments = await Department.find();
    res.send(departments);
});

router.get('/:id', async (req, res) => {
    const department = await Department.findById(req.params.id);

    if(!department){
        return res.status(404).send("The department you have search for is not available")
    }
    res.send(department);
})

router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if(error){
        return res.status(400).send(error.details[0].message);
    }

    const user = await User.findById(req.body.userId);
    if(!user) return res.status(400).send("Invalid user...");

    //creating a new department
    const department = new Department({
        name: req.body.title,
        teams: [{
            people:[{
                _id: user._id,
                name: user.name
            }],
            teamLead:{
                _id: user._id,
                name: user.name
            }
        }],
        inCharge: {
            _id: user._id,
            name: user.name
        }
    });

    await department.save();
    res.send(department);

});

router.put('/:id'), async (req, res) => {
    const { error } = validate(req.body);
    if(error){
        return res.status(400).send(error.details[0].message);
    }

    const user = await User.findById(req.body.userId);
    if(!user) return res.status(400).send("Invalid user...");

    let department = await Department.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.title,
            teams: [{
                people:[{
                    _id: user._id,
                    name: user.name
                }],
                teamLead:{
                    _id: user._id,
                    name: user.name
                }
            }],
            inCharge: {
            _id: user._id,
            name: user.name
            }
        }, 
        {
            new: true
        }
        );

        if(!department){
            return res.status(404).send("The department you are trying to find is not available")
        }

        res.send(department);

}

module.exports = router;