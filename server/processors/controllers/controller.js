import Reservation from "./../models/ReservationSchema.js";
import ErrorHandler from "../error/error.js";

export const p_reservation = async (req, res, next) => {
  const { name, email, phone, date, slot, members } = req.body;
  if (!name || !email || !phone || !date || !slot || !members) {
    return next(new ErrorHandler("Please fill the form!", 400));
  }
  try {
    await Reservation.create({ name, email, phone, date, slot, members });
    res.status(200).json({ message: "Registration successfull" });
  } catch (error) {
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(
        (err) => err.message
      );
      return next(new ErrorHandler(validationErrors.join(" , "), 400));
    }
    res.status(400).json({ message: "Registration failed", error: error });
  }
};
