const mongoose = require("mongoose");
//lets create user Schema here
const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
});
//exporting userSchema as user.
module.exports = mongoose.model("user", userSchema);
