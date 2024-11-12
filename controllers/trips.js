const Trip = require("../models/Trip.js")
const express = require("express")
const router = express.Router() //<- purpose? Connecting express to react?


// Create - POST -
router.post("/", async (req, res) => {
    res.json({message: "create route"})
    try {
        const createdTrip = await Trip.create(req.body)
        res.status(201).json(createdTrip)
    }catch (err) {
        res.status(500)({ err: error.message })
    }
})

// Index/Show All


// Delete


// Update


module.exports = router
