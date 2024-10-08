require("dotenv").config();

const cors = require("cors");
const express = require("express");

// APP GLOBAL VARIABLE
const SERVER = express();
const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN || "http://localhost:5173";
const PORT = process.env.PORT || 8000;

// APP CONFIG
SERVER.use(express.json());
SERVER.use(cors({ origin: FRONTEND_ORIGIN, credentials: true }));

// ROUTES
const apiV1 = require("./routes/v1/api.v1.js");
SERVER.use("/api/v1/", apiV1);

SERVER.get("/", (req, res) => {
  res.send("⚡Server is running⚡");
});

// Start server on specified port
SERVER.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});
