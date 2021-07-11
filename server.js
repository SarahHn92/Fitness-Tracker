const express = require("express");
const mongoose = require("mongoose");
const morgan = require('morgan');
const routes = require('./routes');
const path = require('path');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static("public"));

app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutTracking", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  promiseLibrary: true
});

// routes
app.use(routes);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});