const Trip = require("../models/Trip")
const express = require("express")
const { route } = require("./trips")
const router = express.Router({ mergeParams: true })


// Create -> POST -> /trips/:id/itineraries
router.post("/", async (req, res) => {
    // res.json({  message: "itinerary create route" })
    // console.log(req.params)
    // console.log(req.body)
    
    
    try {
        const tripId = req.params.id

        const createdItinerary = await Trip.findById(req.params.id)
        createdItinerary.itineraries.push(req.body)

        await createdItinerary.save()
        res.status(201).json(createdItinerary)
    }catch (error) {
        // console.log(error)
        res.status(500).json({ error: error.message })
    }
})


// Delete -> DESTROY -> /trips/:id/itineraries/:itineraryId
router.delete("/:itineraryId", async (req, res) => {
    try {
        const tripId = req.params.id
        const itineraryId = req.params.itineraryId
        // throw new Error(`Deleting the child ${itineraryId} from the parent ${tripId}`)
        
        const trip = await Trip.findById(tripId)
        trip.itineraries.remove({ _id: itineraryId })
        await trip.save()
    }catch (error) {
        const deleteResponse = { error: error.message }
        if(res.status === 404){
            return res.json(deleteResponse)
        }
        res.status(500).json(deleteResponse)
    }
})



module.exports = router

