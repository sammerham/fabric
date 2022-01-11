'use strict'
const express = require("express");
const axios = require("axios");
const router = express.Router();
const URL = 'http://www.omdbapi.com/?';
const API_KEY = process.env.KEY;
const { NotFoundError } = require("../expressError");
const Media = require('../models/media');
const Poster = require('../models/poster');


/* GET all media records from db;
{
"Search": [
{
"Title": "CR: Enter the Matrix",
"Year": "2009",
"imdbID": "tt1675286",
"Type": "game",
"Poster": "https://m.media-amazon.com/images/M/MV5BMTExMzY3NTQ1NjleQTJeQWpwZ15BbWU3MDAyMjk2NzM@._V1_SX300.jpg"
}, ....
]
}
*/
router.get('/', async (req, res, next) => {
  try {
    const results = await Media.showAll()
    res.json({ media: results });
  } catch (err) {
    next(new NotFoundError)
  }
});

router.get("/:s", async (req, res, next) => {
  const term = req.params.s;
  try {
    const response = await axios.get(`${URL}s=${term}&apikey=${API_KEY}`);
    const data = response.data['Search'];
    // map over results and insert into DB
    data.map(async d => {
      const mediaRecord = await Media.showMediaByimdbid(d.imdbID);
      // for year strings like "2011–2018"  OR "2004–",
      const year = d.Year.split('–')[0];
      //inserting into DB only if record is unique;  
      if (mediaRecord.length === 0)
        await Media.addMedia(
          d.Title,
          d.imdbID,
          d.Type,
          year);

      // check if poster exist, - inserting into DB into posters table

      const poster = d.Poster;
      // get id of record to relationship
      const media = await Media.showMediaByimdbid(d.imdbID);
      const { id } = media[0];
      // check for duplicate poster in db
      const posterDB = await Poster.showPosterByMediaId(id);
      if (!posterDB[0]) {
        await Poster.addPoster(poster, id);
      }
    });

    res.status(200).json(response.data);
  }
  catch (err) {
    next(new NotFoundError);
  }
});

/* GET all media with matrix search keyword
{
"Search": [
{
"Title": "CR: Enter the Matrix",
"Year": "2009",
"imdbID": "tt1675286",
"Type": "game",
"Poster": "https://m.media-amazon.com/images/M/MV5BMTExMzY3NTQ1NjleQTJeQWpwZ15BbWU3MDAyMjk2NzM@._V1_SX300.jpg"
}, ....
]
}
*/
/*
router.get("/matrix", async (req, res, next) => {
  try {
    const response = await axios.get(`${URL}s=Matrix&apikey=${API_KEY}`);
    let data = response.data['Search'];
    // map over results and insert into DB
    data.map(async d => {
      let mediaRecord = await Media.showMediaByimdbid(d.imdbID);

      //inserting into DB only if record is unique;  
      if (mediaRecord.length === 0)
        await Media.addMedia(
          d.Title,
          d.imdbID,
          d.Type,
          d.Year);

      // check if poster exist, - inserting into DB into posters table

      let poster = d.Poster;
      // get id of record to relationship
      let media = await Media.showMediaByimdbid(d.imdbID);
      const { id } = media[0];
      // check for duplicate poster in db
      let posterDB = await Poster.showPosterByMediaId(id);
      if (!posterDB[0]) {
        await Poster.addPoster(poster, id);
      }
    });

    res.status(200).json(response.data);
  }
  catch (err) {
    next(new NotFoundError);
  }
});



/* GET all media with matrixrevolutions search keyword
{
"Search": [
{
"Title": "CR: Enter the Matrix",
"Year": "2009",
"imdbID": "tt1675286",
"Type": "game",
"Poster": "https://m.media-amazon.com/images/M/MV5BMTExMzY3NTQ1NjleQTJeQWpwZ15BbWU3MDAyMjk2NzM@._V1_SX300.jpg"
}, ....
]
}
*/
/*
router.get("/matrixrevolutions", async (req, res, next) => {
  try {
    const response = await axios.get(`${URL}s=Matrix Revolutions&apikey=${API_KEY}`);
    let data = response.data['Search'];

    // map over results and insert into DB
    data.map(async d => {
      let mediaRecord = await Media.showMediaByimdbid(d.imdbID);

      //inserting into DB only if record is unique;  
      if (mediaRecord.length === 0)
        await Media.addMedia(
          d.Title,
          d.imdbID,
          d.Type,
          d.Year);

      // check if poster exist, - inserting into DB into posters table

      let poster = d.Poster;
      // get id of record to relationship
      let media = await Media.showMediaByimdbid(d.imdbID);
      const { id } = media[0];
      // check for duplicate poster in db
      let posterDB = await Poster.showPosterByMediaId(id);
      if (!posterDB[0]) {
        await Poster.addPoster(poster, id);
      }
    });
    res.status(200).json(response.data);
  }
  catch (err) {
    next(new NotFoundError);
  }
});



/* GET all media with matrixreloaded search keyword
{
"Search": [
{
"Title": "CR: Enter the Matrix",
"Year": "2009",
"imdbID": "tt1675286",
"Type": "game",
"Poster": "https://m.media-amazon.com/images/M/MV5BMTExMzY3NTQ1NjleQTJeQWpwZ15BbWU3MDAyMjk2NzM@._V1_SX300.jpg"
}, ....
]
}
*/
/*
router.get("/matrixreloaded", async (req, res, next) => {
  try {
    const response = await axios.get(`${URL}s=Matrix Reloaded&apikey=${API_KEY}`);
    let data = response.data['Search'];

    // map over results and insert into DB
    data.map(async d => {
      let mediaRecord = await Media.showMediaByimdbid(d.imdbID);

      //inserting into DB only if record is unique;  
      if (mediaRecord.length === 0)
        await Media.addMedia(
          d.Title,
          d.imdbID,
          d.Type,
          d.Year);

      // check if poster exist, - inserting into DB into posters table

      let poster = d.Poster;
      // get id of record to relationship
      let media = await Media.showMediaByimdbid(d.imdbID);
      const { id } = media[0];
      // check for duplicate poster in db
      let posterDB = await Poster.showPosterByMediaId(id);
      if (!posterDB[0]) {
        await Poster.addPoster(poster, id);
      }
    });

    res.status(200).json(response.data);
  }
  catch (err) {
    next(new NotFoundError);
  }
});
*/
module.exports = router;