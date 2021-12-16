const express = require("express");
const app = express();
const mongoose = require("mongoose");
const meetings = require("./Routes/meetingRoute");
//Lets add some middle wares here
// I am not using bodyParser because after express update 4.16+ we don't need bodyParser, instead we can use express.json
app.use(express.json());
app.use("/meetings", meetings);
//Database  URL and PORT
//I could have used dotenv file for hiding my Database URL and PORT ,but this is an assignment,thats why i didn't use dotenv.
const MONGODB_URI =
  "mongodb+srv://Sahil123:Sahil123@assignment.t2epb.mongodb.net/meetingsData?retryWrites=true&w=majority";
const PORT = 5000;
//LETS connect with our Database .
mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, () => {
  console.log("Connected to database successfully");
});
//lets now run our server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
