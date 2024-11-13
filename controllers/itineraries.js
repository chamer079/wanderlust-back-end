const Trip = require("../models/Trip")
const express = require("express")
const router = express.Router()


// Create -> POST -> /trips/:id/itineraries
router.post("/trips/:id/itineraries", async (req, res) => {
    // res.json({  message: "itinerary create route" })
    // console.log(req.params)
    // console.log(req.body)

    
    try {
        const createdItinerary = await Trip.findById(req.params.id)
        createdItinerary.itineraries.push(req.body)

        await createdItinerary.save()
        res.status(201).json(createdItinerary)
    }catch (error) {
        // console.log(error)
        res.status(500).json({ error: error.message })
    }
})

// Read/Show 1 -> GET -> /trips/:tripId/itineraries/:inineraryId
router.get("/trips/:id/itineraries/:id", async (req, res) => {
    res.json({ message: "index route" })
})


// Update -> PUT -> /trips/:tripId/itineraries/itineraryId



module.exports = router

