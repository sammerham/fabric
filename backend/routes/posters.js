'use strict'
const express = require("express");
const axios = require("axios");
const router = express.Router();
const URL = 'http://www.omdbapi.com/?';
const API_KEY = process.env.KEY;
const db = require('../db');

const { NotFoundError } = require("../expressError");
const Poster = require('../models/poster');




/* GET all posters records from db;
[
{
"id": 1,
"post": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
"media_id": 1
},,....
] */
router.get('/', async (req, res, next) => {
  try {
    const results = await Poster.showAll()
    res.status(200).json(results);
  } catch (err) {
    next(new NotFoundError)
  }
});






module.exports = router;