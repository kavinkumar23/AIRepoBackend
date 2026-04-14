const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DB,
  password: process.env.PG_PASSWORD,
  port: 5432,
});
console.log("DB HOST:", process.env.DATABASE_URL);
const test = await db.query("SELECT NOW()");
console.log("DB TIME:", test.rows);
module.exports = pool;
