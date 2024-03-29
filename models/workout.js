const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    
      day: 
        { 
          type: Date,
          default: () => 
              Date.now()
        },

    
    
    exercise: [
        {
            type:{ 
                type: String 
            },
            name: String,
            duration: Number,
            distance: Number,
            weight: Number,
            reps: Number,
            sets: Number
        }
         
    ],
    totalDuration: {
        type: Number,
        default: 0
    }
});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;