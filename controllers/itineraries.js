const Trip = require("../models/Trip");
const express = require("express");
const { route } = require("./trips");
const router = express.Router({ mergeParams: true });

router.post("/", async (req, res) => {
  try {
    const tripId = req.params.id;

    const createdItinerary = await Trip.findById(req.params.id);
    createdItinerary.itineraries.push(req.body);

    await createdItinerary.save();
    res.status(201).json(createdItinerary);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:itineraryId", async (req, res) => {
  try {
    const tripId = req.params.id;
    const itineraryId = req.params.itineraryId;

    const trip = await Trip.findById(tripId);
    trip.itineraries.remove({ _id: itineraryId });
    await trip.save();
  } catch (error) {
    const deleteResponse = { error: error.message };
    if (res.status === 404) {
      return res.json(deleteResponse);
    }
    res.status(500).json(deleteResponse);
  }
});

module.exports = router;
