const mongoose = require("mongoose");
const meetingSchema = mongoose.Schema({
  uid1: {
    type: String,
    required: true,
  },
  uid2: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: new Date(),
  },
});
module.exports = mongoose.model("meeting", meetingSchema);
