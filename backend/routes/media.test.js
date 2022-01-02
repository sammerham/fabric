process.env.NODE_ENV = "test";
const request = require("supertest");

// app imports
const app = require("../app");
const db = require("../db");


let mediaRecord;

beforeEach(async () => {
  const result = await db.query(`
  INSERT INTO 
      media (
        title, 
        imdbID, 
        media_type, 
        release_year
        )
        VALUES 
        ($1, $2, $3, $4)
      RETURNING
      id,
      title,
      imdbID,
      media_type,
      release_year
      `,
    [
      'Face Off',
      'faceoff_test',
      'movie',
      '1997'
    ]
  );
  mediaRecord = result.rows[0];
});

// Teardown at end
afterEach(async function () {
  // delete any data created by test
  await db.query("DELETE FROM media");
});

afterAll(async function () {
  // close db connection
  await db.end();
});


// ** GET / cats - returns`{Media: [{},{},...]}` * /

describe("GET /media", () => {
  test("Gets a list of media records", async() => {
    const response = await request(app).get(`/media`);
    const { media } = response.body;
    expect(response.statusCode).toBe(200);
    expect(media).toHaveLength(1);
    expect(media[0]).toEqual(mediaRecord);
  });
});