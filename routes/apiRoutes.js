// requiring router from express
const router = require('express').Router();
// requiring our models folder to use exercise and workouts model
const dbmodels = require('../models');
const { db } = require('../models/exercise');

router.post('/api/workouts', ({ body }, res) => {
    dbmodels.Workout.create(body)
    .then(dbworkoutTracking => {
        res.json(dbworkoutTracking);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});