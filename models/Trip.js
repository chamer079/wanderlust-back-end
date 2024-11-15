const mongoose = require("mongoose");

const itinerarySchema = mongoose.Schema({
  sight: { type: String },
  activity: { type: String },
  food: { type: String },
});

const tripSchema = mongoose.Schema({
  destination: { type: String },
  image: { type: String },
  date: { type: String },
  duration: { type: String },
  accomodationBudget: { type: Number },
  shoppingBudget: { type: Number },
  entertainmentBudget: { type: Number },
  emergencyBudget: { type: Number },
  itineraries: [itinerarySchema],
});

const Trip = mongoose.model("Trip", tripSchema);

module.exports = Trip;
