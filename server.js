const dotenv = require("dotenv")
dotenv.config()
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")

const tripRouter = require("./controllers/trips.js")
const itineraryRouter = require("./controllers/itineraries.js")

mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.on("connected", () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}`)
})

mongoose.connection.on("error", (err) => {
    console.log(`Error for ${mongoose.connect.name}: ${err}`)
})

// mount the router
app.use(express.json())


// Routes Go Here
app.use("/trips", tripRouter)
app.use("/trips/:tripId/itineraries", itineraryRouter)  

app.listen(process.env.PORT || 3000, () => {
    console.log("The express app is ready!")
})