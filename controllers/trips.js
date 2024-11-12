const Trip = require("../models/Trip.js")
const express = require("express")
const router = express.Router() //<- purpose? Connecting express to react?


// Create
router.post("/", async (req, rez, next) => {
    try {
        const newTrip = await Trip.create(req.body)
        res.status(201).json(newtrip)
    }catch (err) {
        res.status(500).json(err)
    }
})

// Index/Show All
// router.get("/", async (req, res, next) => {
//     try {

//     } catch(err){

//     }
// })

// Delete


// Update


module.exports = router
