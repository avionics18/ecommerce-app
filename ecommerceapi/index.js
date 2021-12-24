const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");

// Config
dotenv.config();
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGO_URL)
    .then(console.log("Connected to DB successfully"))
    .catch(err => console.log(err));

// Routes
app.use("/api/users", userRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log("Server is running successfully!");
});
