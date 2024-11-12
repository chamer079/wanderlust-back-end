const mongoose = require("mongoose")
const Itinerary = require("./Itirary")


const todoListSchema = mongoose.Schema({
    sight: { type: String },
    activity: { type: String },
    food: { type: String },
})

const budgetSchema = mongoose.Schema({
    travel: { type: Number },
    lodging: { type: Number },
    food: { type: Number },
    souvenir: { type: Number },
    shopping: { type: Number },
    attraction: { type: Number },
    emergancy: { type: Number },
})

const itinerarySchema = mongoose.Schema({
    date: { type: String },
    duration: { type: String },
    budgets: [ budgetSchema ],
    todoLists: [ todoListSchema ],
})

const tripSchema = mongoose.Schema({
    destination: { type: String, required: true },
    image: { type: String, required: true },
    itineraries: [ Itinerary ],
})

const Trip = mongoose.model("Trip", tripSchema)

module.exports = Trip