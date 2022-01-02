const express = require("express");
const app = express();

// environment variables
require('dotenv').config()

// useful error class to throw
const { NotFoundError } = require("./expressError");

// process JSON body => req.body
app.use(express.json());

// process traditional form data => req.body
app.use(express.urlencoded({ extended: true }));



//!*************IMPORTING ROUTES*****************
//importing ----- routes
const mediaRoutes = require('./routes/media')
const postersRoutes = require('./routes/posters')
//!******************************

//!*************Middleware for CORS Access-Control-Allow-Origin header *****************

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

//!*************Creating ROUTES*****************

app.use('/media', mediaRoutes);
app.use('/posters', postersRoutes);
//!******************************




/** 404 handler: matches unmatched routes; raises NotFoundError. */
app.use(function (req, res, next) {
  return next(new NotFoundError());
});

/** Error handler: logs stacktrace and returns JSON error message. */
app.use(function (err, req, res, next) {
  const status = err.status || 500;
  const message = err.message;
  if (process.env.NODE_ENV !== "test") console.error(status, err.stack);
  return res.status(status).json({ error: { message, status } });
});
// end


module.exports = app;