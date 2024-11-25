const mongoose = require("mongoose");

const itinerarySchema = mongoose.Schema({
  text: { type: String },
  category: { 
    type: String,
    enum: ["sights", "activities", "food"], 
  },
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
