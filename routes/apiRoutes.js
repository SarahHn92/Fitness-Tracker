// requiring router from express
const router = require('express').Router();
// requiring our models folder to use exercise and workouts model
const dbmodels = require('../models');
const { db } = require('../models/exercise');

// CREATE a workout
router.post('/api/workouts', ({ body }, res) => {
    dbmodels.Workout.create(body)
    .then(dbworkoutTracking => {
        res.json(dbworkoutTracking);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

// READ workout
router.get('/api/workouts/range', (req, res) => {
    dbmodels.Workout.find({})
    .then(dbworkoutTracking => {
        res.json(dbworkoutTracking);
    })
    .catch(err => {
        res.status(400).json(err);
    });
})

// UPDATE workout
router.put('/api/workouts/:id', ({ params }, res) => {
    dbmodels.Workout.findByIdAndUpdate(
        {
            _id: req.params.id
        },
        {
            $addToSet: {
                exercise: req.body
            }
        },
        {
            new: true
        }
    )
    .then((dbworkoutTracking) => {
        res.json(dbworkoutTracking);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});


