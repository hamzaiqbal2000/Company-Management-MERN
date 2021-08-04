const { validate, Department } = require("../models/department");
const express = require("express");
const { User } = require("../models/user");
const { Team } = require("../models/team");
const router = express.Router();

router.get("/", async (req, res) => {
  const departments = await Department.find();
  res.send(departments);
});

router.get("/:id", async (req, res) => {
  const department = await Department.findById(req.params.id);

  if (!department) {
    return res
      .status(404)
      .send("The department you have search for is not available");
  }
  res.send(department);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const teams = await Team.findById(req.body.teamsId);
  if (!teams) return res.status(400).send("Invalid team...");

  // const user = await User.findById(req.body.userId);
  // if (!user) return res.status(400).send("Invalid user...");

  const incharge = await User.findById(req.body.inChargeId);
  if (!incharge) return res.status(400).send("Invalid incharge...");

  // const people = await User.findById(req.body.peopleId);
  // if (!people) return res.status(404).send("Invalid peopleId...");

  // const teamLead = await User.findById(req.body.teamLeadId);
  // if (!teamLead) return res.status(404).send("Invalid teamleadId...");

  //creating a new department
  const department = new Department({
    name: req.body.title,
    teams: [
      {
        _id: teams._id,
        people: [
          {
            //_id: people._id,
            name: teams.people.name,
          },
        ],
        teamLead: {
          //_id: teamLead._id,
          name: teams.teamLead.name,
        },
      },
    ],
    inCharge: {
      _id: incharge._id,
      name: incharge.name,
    },
  });

  await department.save();
  res.send(department);
});

router.put("/:id"),
  async (req, res) => {
    const { error } = validate(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const user = await User.findById(req.body.userId);
    if (!user) return res.status(400).send("Invalid user...");

    let department = await Department.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.title,
        teams: [
          {
            people: [
              {
                _id: user._id,
                name: user.name,
              },
            ],
            teamLead: {
              _id: user._id,
              name: user.name,
            },
          },
        ],
        inCharge: {
          _id: user._id,
          name: user.name,
        },
      },
      {
        new: true,
      }
    );

    if (!department) {
      return res
        .status(404)
        .send("The department you are trying to find is not available");
    }

    res.send(department);
  };

module.exports = router;
