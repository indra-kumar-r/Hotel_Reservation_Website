import { connect } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const db = connect(process.env.MONGOOSE_URI, {
  dbName: "Restaurant",
});

export default db;
