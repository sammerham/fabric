const db = require("../db");




class Poster {
  /** get all posters 
    returns
[
"id": 1,
"media_id": 1,
"post": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
}, .....]
   */
  // fn to get all posters records from db;

  static async showAll() {
    const results = await db.query(`SELECT 
    id,
    media_id,
    post
    FROM posters`);
    return results.rows;
  }

 // fn to add a poster record into db;
  static async addPoster(
    poster,
    id
  ) {
    if (poster !== "N/A")
    await db.query(
      `INSERT INTO
      posters 
      (
        post, 
        media_id
        )
        VALUES
        ($1, $2)`,
      [
        poster,
        id
      ]);
  };
  // fn to get a media record from db by imdbid;
  static async showPosterByMediaId (id) {
    const posterRecord = await db.query(
      `SELECT 
      id,
      media_id,
      post 
      FROM
      posters
      WHERE
      media_id = $1`,
      [id]
    );
    return posterRecord.rows;
  }
}

module.exports = Poster;