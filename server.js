const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const tripRouter = require("./controllers/trips.js");
const itineraryRouter = require("./controllers/itineraries.js");

app.use(cors({ origin: ["http://localhost:5173", "https://lustrous-syrniki-1f5680.netlify.app"] }));

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}`);
});

mongoose.connection.on("error", (err) => {
  console.log(`Error for ${mongoose.connect.name}: ${err}`);
});

app.use(express.json());

app.use("/trips", tripRouter);
app.use("/trips/:id/itineraries", itineraryRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log("The express app is ready!");
});
