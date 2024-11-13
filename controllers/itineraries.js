const Trip = require("../models/Trip")
const express = require("express")
const router = express.Router()


// Create -> POST -> /trips/:tripId/itineraries
router.post("/", async (req, res) => {
    // res.json({  message: "itinerary create route" })

    try {
        const createdItinerary = await Trip.create(req.body)
        res.status(201).json(createdItinerary)
    }catch (error) {
        res.status(500).json({ error: error.message })
    }
})


// Read/Show 1 -> GET -> /trips/:tripId/itineraries/:inineraryId



// Update -> PUT -> /trips/:tripId/itineraries/itineraryId



module.exports = router

