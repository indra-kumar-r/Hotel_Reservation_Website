import express, { json, urlencoded } from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./processors/config/db.js";
import router from "./processors/routers/router.js";
import { errorMiddleware } from "./processors/error/error.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST", "GET", "UPDATE", "DELETE"],
    credentials: true,
  })
);
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(errorMiddleware);

db.then(() => {
  app.use(router);
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
}).catch((error) => {
  console.log(error);
});
