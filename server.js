const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.DB_URL);

//CSS rendering
app.use("/", express.static(__dirname));

//Schema

const eventSchema = {
  name: String,
  Date_of_Birth: String,
  email: String,
  mobileNumber: Number,
  gender: String,
  academicYear: String,
};

const Event = mongoose.model("Event", eventSchema);
const port = process.env.PORT || 3000;

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  let newEvent = new Event({
    name: req.body.name,
    Date_of_Birth: new Date(req.body.DOB).toDateString(),
    email: req.body.email,
    mobileNumber: req.body.mobile,
    gender: req.body.gender,
    academicYear: req.body.year,
  });

  newEvent.save();
  res.redirect("/");
});

app.listen(port, function () {
  console.log("server is up and running");
});
