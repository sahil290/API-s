const express = require("express");
const router = express.Router();
const Meeting = require("../Models/meetingModel");
//Lets create some routes
//Post route to create a new meeting
router.post("/new", async (req, res) => {
  const newMeeting = await new Meeting({
    uid1: req.body.uid1,
    uid2: req.body.uid2,
  });
  try {
    const saveNewMeeting = await newMeeting.save();
    res.status(200).json(saveNewMeeting);
  } catch (err) {
    res.status(500).send({ message: err });
  }
});
//Get route to get all the existing users
router.get("/all", async (req, res) => {
  try {
    const result = await Meeting.find();
    res.status(200).json(result);
  } catch (err) {
    res.status(404).send({ message: err });
  }
});
//Lets create route for getting a specific meeting information
router.get("/:meetingId", async (req, res) => {
  try {
    const specificMeeting = await Meeting.findById(req.params.meetingId);
    res.status(200).json(specificMeeting);
  } catch (err) {
    res.status(404).send({ message: err });
  }
});
//Lets create a route for deleting a specific meeting information
router.delete("/:meetingId", async (req, res) => {
  try {
    const deleteThisMeeting = await Meeting.deleteOne({
      _id: req.params.meetingId,
    });
    res.status(200).json({ message: deleteThisMeeting });
  } catch (err) {
    res.status(404).send({ message: err });
  }
});
//export this router
module.exports = router;
