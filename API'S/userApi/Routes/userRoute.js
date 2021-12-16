const express = require("express");
const router = express.Router();
const User = require("../Models/userModel");
//Time to create some routes for our users
//Post route for adding new user in our Database
router.post("/new", async (req, res) => {
  const newUser = await new User({
    username: req.body.username,
  });
  try {
    const saveUser = await newUser.save();
    res.status(200).json(saveUser);
  } catch (err) {
    res.status(500).send({ message: err });
  }
});
//Lets create a get route , so that we can get the list of all the  users in the database .
router.get("/all", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.send({ message: err });
  }
});
//Lets create a get route for getting a specific user in the database
router.get("/:userId", async (req, res) => {
  try {
    const specificUser = await User.findById(req.params.userId);
    res.status(200).json(specificUser);
  } catch (err) {
    res.send({ message: err });
  }
});
//Lets create a route for deleting a specific user in the database
router.delete("/:userId", async (req, res) => {
  try {
    const deleteThisUser = await User.deleteOne({ _id: req.params.userId });
    res.status(200).send({ message: deleteThisUser });
  } catch (err) {
    res.send({ message: err });
  }
});
//export this router
module.exports = router;
