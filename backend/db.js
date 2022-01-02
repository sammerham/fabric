/** Database setup for doctors. */

const { Client } = require("pg");

const DB_URI = process.env.NODE_ENV === "test"
  ? "postgresql:///mediadb_test"
  : "postgresql:///mediadb";

let db = new Client({
  connectionString: DB_URI
});

db.connect();

module.exports = db;