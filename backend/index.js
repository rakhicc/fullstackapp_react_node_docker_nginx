const express = require("express");
const { Pool } = require("pg");

const app = express();

const pool = new Pool({
  host: "db",
  user: "postgres",
  password: "postgres",
  database: "postgres",
  port: 5432,
});

app.get("/api", async (req, res) => {
  const result = await pool.query("SELECT NOW()");
  res.send(`Backend time: ${result.rows[0].now}`);
});

app.listen(3001, () => {
  console.log("Backend running on port 3001");
});
``