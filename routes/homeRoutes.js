const router = require("express").Router();
const path = require("path");

// router.get to get the views for homepage, dashboard, and stats page 
// showing the path
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});


router.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
});


router.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'));
});

// exporting routes to be used in index.js

module.exports = router;