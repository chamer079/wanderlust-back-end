const Trip = require("../models/Trip.js")
const express = require("express")
const router = express.Router() //<- purpose? Connecting express to react?


// Create - POST - /trips
router.post("/", async (req, res) => {
    // res.json({ message: "create route" })

    try {
        const createdTrip = await Trip.create(req.body)
        res.status(201).json(createdTrip)
    }catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// Index/Show All - GET - /trips
router.get("/", async (req, res) => {
    // res.json({ message: "index route" })
    
    try {
        const getAllTrips = await Trip.find()
        res.status(200).json(getAllTrips)
    }catch (error) {
        res.status(500).json({ error: error.message})
    }
})

// Delete - DESTROY - /trips/:id
router.delete("/:id", async (req, res) => {
    try {
        // throw new Error("This is a delete test error.")
        const deletedTrip = await Trip.findByIdAndDelete(req.params.id)
    }catch (error) {
        const deleteResponse = { error: error.message }
        if(res.status === 404){ 
            return res.json(deleteResponse)
        }
        res.status(500).json(deleteResponse)
    }
})

// Update - PUT - /trips/:id
router.put("/:id", async (req, res) => {
    // res.json({ message: `Update route with the param ${req.params.tripId}`})
    try {
        const updatedTrip = await Trip.findByIdAndUpdate(req.params.tripId, req.body)
        if(!updatedTrip){
            res.status(404)
            throw new Error("Trip not found.")
        }
        res.status(200).json(updatedTrip)
    } catch (error){
        if(res.statusCode === 404){
            res.json({ error: error.message })
        } else{
            res.status(500).json({ error: error.message })
        }
    }
})


module.exports = router
