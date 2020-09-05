const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const WorkoutSchema = new Schema({
  exercises: [{
  name: {
    type: String,
    unique: true,
    required: "Enter a name for Workout"
  },
  type: {
    type: String,
    required: "Please enter type of exercise"
  },
  weight: {
    type: Number,
   // input: Number
  },
  sets: {
    type : Number,
  },
  reps: {
    type : Number,
  },
  duration: {
    type: Number,
    required: "Enter a duration for this activity"
  },
  distance : {
    type: Number
  },

  }],
  day : {
    type: Date,
    default : Date.now()
  }
});
const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;