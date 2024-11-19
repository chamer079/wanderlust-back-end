const Trip = require("../models/Trip.js");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const createdTrip = await Trip.create(req.body);
    res.status(201).json(createdTrip);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const getAllTrips = await Trip.find();
    res.status(200).json(getAllTrips);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const foundTrip = await Trip.findById(req.params.id);
    if (!foundTrip) {
      res.status(404);
      throw new Error("Trip not found.");
    }
    res.status(200).json(foundTrip);
  } catch (error) {
    if (res.statusCode === 404) {
      res.json({ error: error.message });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedTrip = await Trip.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedTrip);
  } catch (error) {
    const deleteResponse = { error: error.message };
    if (res.status === 404) {
      return res.json(deleteResponse);
    }
    res.status(500).json(deleteResponse);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedTrip = await Trip.findByIdAndUpdate(
      req.params.tripId,
      req.body,
      { new: true }
    );
    if (!updatedTrip) {
      res.status(404);
      throw new Error("Trip not found.");
    }
    res.status(200).json(updatedTrip);
  } catch (error) {
    if (res.statusCode === 404) {
      res.json({ error: error.message });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
});

module.exports = router;
