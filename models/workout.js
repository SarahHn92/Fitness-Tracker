const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    date: Date,
    exercise: [
        // references exercise schema
        {
            type: Schema.Types.ObjectId,
            ref: "Exercise"
        }
         
    ],
    totalDuration: {
        type: Number,
        default: 0
    }
});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;