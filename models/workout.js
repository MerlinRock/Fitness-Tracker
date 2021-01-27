const mongoose = require("mongoose");
const WorkoutSchema = new mongoose.Schema({
   exercises: [{
      type: {
         type: String,
         required: ""
      },
      name: {
         type: String,
         trim: true,
         required: ""
      },
      weight: {
         type: Number,
         required: ""
      },
      sets: {
         type: Number
      },
      reps: {
         type: Number,
         required: ""
      },
      
      distance: {
         type: Number,
         required: ""
      },
      duration: {
         type: Number,
         required: ""
      },
   }],
   day: {
      type: Date,
      default: Date.now()
   }
});

const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;