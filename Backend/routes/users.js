const { validate, User } = require("../models/user");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5001");
  const users = await User.find();
  res.send(users);
});

router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res
      .status(400)
      .send("The user you are trying to find is not available");
  }
  res.send(user);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) {
    return res.status(404).send(error.details[0].message);
  }

  const user = new User({
    name: req.body.name,
  });

  await user.save();
  res.send(user);
});

router.put("/:id", async (req, res) => {
  const { error } = validate(req.body);
  if (error) {
    return res.status(404).send(error.details[0].message);
  }

  let user = await User.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
    },
    {
      new: true,
    }
  );

  res.send(user);
});

module.exports = router;
