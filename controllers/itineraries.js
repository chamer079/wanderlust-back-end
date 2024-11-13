const Trip = require("../models/Trip")
const express = require("express")
const { route } = require("./trips")
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
router.get("/trips/:id/itineraries", async (req, res) => {
    // res.json({ message: "index route" })

    try {
        const getAllItineraries = await Trip.find()
        res.status(200).json(getAllItineraries)
    }catch (error) {
            res.status(500).json({ error: error.message })
        }
})

// Delete -> DESTROY -> /trips/:id/itineraries/:itineraryId
router.delete("/trips/:id/itineraries/:itineraryId", async (req, res) => {
    try {
// throw new Error("This is an itinerary delete test error")
        const deleteItinerary = await Trip.findByIdAndDelete(req.params.itineraryId)
    }catch (error) {
        const deleteResponse = { error: error.message }
        if(res.status === 404){
            return res.json(deleteResponse)
        }
        res.status(500).json(deleteResponse)
    }
})



module.exports = router

