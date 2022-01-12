const db = require("../db");


class Media {
  /** get all media 
    returns
{
"Search": [
    {
    "Title": "The Matrix Revisited",
    "Year": "2001",
    "imdbID": "tt0295432",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTkzNjg3NjE4N15BMl5BanBnXkFtZTgwNTc3NTAwNzE@._V1_SX300.jpg"
}, .....]
   */
  static async showAll() {
    const results = await db.query(`
    SELECT
    id,
    title,
    imdbid,
    media_type,
    release_year
    FROM
    media
    `);
    return results.rows;
  };

 // fn to add a media record into db;
  static async addMedia(
    title,
    imdbID,
    Type,
    Year
  ) {
    await db.query(`INSERT INTO 
      media (
        title, 
        imdbID, 
        media_type, 
        release_year
        )
      VALUES
      ($1, $2, $3, $4)`,
      [
        title,
        imdbID,
        Type,
        Year
      ]);
  };

 // fn to get a media record from db by imdbid;
  static async showMediaByimdbid(imdbid) {
    const mediaRecord = await db.query(
      `SELECT 
      id,
      title,
      imdbid,
      media_type,
      release_year 
      FROM
      media
      WHERE
      imdbid = $1`,
      [imdbid]
    );
    return mediaRecord.rows;
  }
};




module.exports = Media;