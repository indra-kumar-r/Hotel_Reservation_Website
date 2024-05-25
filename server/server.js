const express = require("express");
const cors = require("cors");
require("dotenv").config();
const db = require("./processors/config/db");
const router = require("./processors/routers/router");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

db.then(() => {
  app.use(router);
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
}).catch((error) => {
  console.log(error);
});
