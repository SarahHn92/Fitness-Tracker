const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// schema for exercises document
const ExerciseSchema = new Schema({
    type: String,
    name: String,
    distance: Number,
    duration: Number
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;