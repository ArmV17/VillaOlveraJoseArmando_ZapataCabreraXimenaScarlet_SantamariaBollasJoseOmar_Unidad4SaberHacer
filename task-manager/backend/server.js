const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  host: "db",
  user: "postgres",
  password: "postgres",
  database: "tasks",
  port: 5432
});

// Endpoints simples
app.get("/tasks", async (req, res) => {
  const result = await pool.query("SELECT * FROM tasks");
  res.json(result.rows);
});

app.post("/tasks", async (req, res) => {
  const { title } = req.body;
  await pool.query("INSERT INTO tasks(title) VALUES($1)", [title]);
  res.status(201).send("Task added");
});

app.listen(5000, () => console.log("Backend running on port 5000"));
