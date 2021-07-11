// requiring router from express
const router = require('express').Router();
// requiring our models folder to use exercise and workouts model
const dbmodels = require('../models');


// CREATE a workout
router.post('/workouts', ({ body }, res) => {
    dbmodels.Workout.create(body)
    .then(dbworkoutTracking => {
        res.json(dbworkoutTracking);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

// READ workout
router.get('/workouts/range', (req, res) => {
    dbmodels.Workout.find({})
    .then(dbworkoutTracking => {
        res.json(dbworkoutTracking);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

// UPDATE workout
router.put('/workouts/:id', ({ params, body }, res) => {
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

// returning totalDuration of all exercises
router.get('/workouts', (req, res) => {
    db.Workout.aggregate([
        {
           $addFields: {
            totalDuration: {$sum: $exercise.duration}
            } 
        }
    ])
    .then((dbworkoutTracking) => {
        res.json(dbworkoutTracking);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

// returning totalWeight of all exercises
router.get('/workouts', (req, res) => {
    db.Workout.aggregate([
        {
           $addFields: {
            totalWeight: {$sum: $exercise.weight}
            } 
        }
    ])
    .then((dbworkoutTracking) => {
        res.json(dbworkoutTracking);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});


module.exports = router; 

