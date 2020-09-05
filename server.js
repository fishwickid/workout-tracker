const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// mongoose.set('bufferCommands', false);

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost";

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/trackerdb',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);


// Import routes and give the server access to them.
require("./controllers/workout-controllers")(app);

app.listen(PORT, () => {
    console.log("App running on port", PORT);
});