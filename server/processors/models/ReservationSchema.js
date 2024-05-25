import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      required: true,
      validate: [validator.isEmail, "Invalid Email!"],
    },
    phone: {
      type: String,
      required: true,
      minLength: [10, "Minimum 10 digits"],
      maxLength: [10, "Maximum 10 digits"],
    },
    date: { type: String, required: true },
    slot: {
      type: String,
      required: true,
      enum: ["Breakfast", "Lunch", "Supper", "Dinner"],
    },
    members: { type: String, required: true, default: 1 },
  },
  {
    timestamps: true,
  }
);

const Reservation = mongoose.model(
  "Reservation",
  reservationSchema,
  "Reservations"
);

export default Reservation;
