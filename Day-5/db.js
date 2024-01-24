const mongoose = require("mongoose");

const mongoURL = "mongodb://localhost:27017/hotels";

mongoose.connect(mongoURL);

const db = mongoose.connection;

db.on("connected", () => {
  console.log("Mongo DB connection established");
});

db.on("error", () => {
  console.log("Mongo DB connection failed");
});

db.on("disconnected", () => {
  console.log("Mongo DB connection disconnected");
});

module.exports = db;
